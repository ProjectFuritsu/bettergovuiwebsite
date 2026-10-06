// Reads the library's type definitions and writes src/generated/api.json: every exported
// component with its description and props, and every helper function with its signature.
// The props tables on the site come from here, so they always match the installed version.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const PACKAGE = "bettergovregiondavaoui";
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const packageDir = path.dirname(fileURLToPath(import.meta.resolve(`${PACKAGE}/package.json`)));
const packageJson = JSON.parse(fs.readFileSync(path.join(packageDir, "package.json"), "utf8"));
const typesFile = path.join(packageDir, "dist", "index.d.mts");
const outFile = path.join(root, "src", "generated", "api.json");

const program = ts.createProgram([typesFile], {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    jsx: ts.JsxEmit.ReactJSX,
    skipLibCheck: true,
    noEmit: true,
});
const checker = program.getTypeChecker();
const sourceFile = program.getSourceFile(typesFile);
if (!sourceFile) throw new Error(`Couldn't read ${typesFile}`);

const isOwn = (node) => node.getSourceFile().fileName === sourceFile.fileName;
const docOf = (symbol) => ts.displayPartsToString(symbol.getDocumentationComment(checker)).trim();

// Interfaces, type aliases and constants declared in the library, by name, to follow `extends` chains and aliases.
const localTypes = new Map();
const localConstants = new Map();
ts.forEachChild(sourceFile, (node) => {
    if (ts.isInterfaceDeclaration(node) || ts.isTypeAliasDeclaration(node)) localTypes.set(node.name.text, node);
    if (ts.isVariableStatement(node)) {
        for (const declaration of node.declarationList.declarations) {
            if (declaration.type) localConstants.set(declaration.name.getText(sourceFile), declaration.type.getText(sourceFile));
        }
    }
});

const ELEMENTS = {
    Anchor: "a", Button: "button", Div: "div", Span: "span", Input: "input", Select: "select",
    TextArea: "textarea", Table: "table", FieldSet: "fieldset", Details: "details", LI: "li",
    Paragraph: "p", Heading: "h1–h6", Dialog: "dialog",
};

/** The HTML element whose attributes a props type passes on, e.g. "button", following `extends` and `Omit<…>`. */
function elementOf(typeText, seen = new Set()) {
    const direct = typeText.match(/HTML(\w*)Element\b/);
    if (direct) return direct[1] ? ELEMENTS[direct[1]] ?? direct[1].toLowerCase() : "element";
    for (const [name] of typeText.matchAll(/\b[A-Z]\w*Props\b/g)) {
        const node = localTypes.get(name);
        if (!node || seen.has(name)) continue;
        seen.add(name);
        const text = ts.isInterfaceDeclaration(node)
            ? (node.heritageClauses ?? []).map((clause) => clause.getText(sourceFile)).join(" ")
            : node.type.getText(sourceFile);
        const found = elementOf(text, seen);
        if (found) return found;
    }
    return null;
}

/** Splits 'Text. Default "md".' into the text and the default value. */
function splitDefault(description) {
    // The sentence ends at a period followed by a space, but not the one in "e.g." or "i.e.".
    const match = description.match(/(?:^|\s)Default:?\s+((?:e\.g\.|i\.e\.|[^])+?)\.(?=\s|$)/);
    if (!match) return { description, defaultValue: null };
    return {
        description: description.replace(match[0], "").trim(),
        defaultValue: match[1].trim(),
    };
}

const LITERAL = ts.TypeFlags.StringLiteral | ts.TypeFlags.NumberLiteral;

/**
 * How a prop's type reads in the docs: a union of fixed values is spelled out ("filled" | "outline"), even
 * when it's written as an alias like ButtonVariant; anything else keeps the name it was written with (Size, ReactNode).
 */
function typeTextOf(prop, decl, declaration) {
    const type = checker.getNonNullableType(checker.getTypeOfSymbolAtLocation(prop, declaration));
    if (type.isUnion() && type.types.length <= 12 && type.types.every((member) => member.flags & LITERAL)) {
        // The checker lists them in its own order; put them back in the order they were written.
        const written = decl.type ? writtenText(decl.type.getText(sourceFile)) : "";
        const position = (text) => {
            const index = written.indexOf(text);
            return index === -1 ? Infinity : index;
        };
        return type.types
            .map((member) => checker.typeToString(member))
            .sort((a, b) => /^\d/.test(a) && /^\d/.test(b) ? Number(a) - Number(b) : position(a) - position(b))
            .join(" | ");
    }
    if (decl.type) return unalias(decl.type.getText(sourceFile).replace(/\s+/g, " "));
    return checker.typeToString(type);
}

/** A type's text with the aliases and constants it mentions written out, e.g. LayoutElement → its list of elements. */
function writtenText(text, seen = new Set()) {
    return text.replace(/\b[A-Z][A-Za-z_]*\b/g, (name) => {
        if (seen.has(name)) return name;
        seen.add(name);
        const alias = localTypes.get(name);
        if (alias && ts.isTypeAliasDeclaration(alias)) return writtenText(alias.type.getText(sourceFile), seen);
        if (localConstants.has(name)) return writtenText(localConstants.get(name), seen);
        return name;
    });
}

/** Follows aliases that only rename another type, e.g. ButtonSize → Size, so the docs use one name for one thing. */
function unalias(text) {
    let node = localTypes.get(text);
    while (node && ts.isTypeAliasDeclaration(node) && ts.isTypeReferenceNode(node.type) && !node.type.typeArguments) {
        text = node.type.typeName.getText(sourceFile);
        node = localTypes.get(text);
    }
    return text;
}

function propsOf(propsType, declaration) {
    return checker.getPropertiesOfType(propsType)
        .filter((prop) => prop.declarations?.some(isOwn))
        .map((prop) => {
            const decl = prop.declarations.find(isOwn);
            const type = typeTextOf(prop, decl, declaration);
            return {
                name: prop.name,
                type,
                required: !(prop.flags & ts.SymbolFlags.Optional),
                ...splitDefault(docOf(prop)),
            };
        })
        .sort((a, b) => Number(b.required) - Number(a.required));
}

const components = {};
const functions = {};
const shapes = {};

for (const exported of checker.getExportsOfModule(checker.getSymbolAtLocation(sourceFile))) {
    const symbol = exported.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(exported) : exported;
    const declaration = symbol.valueDeclaration;
    const name = exported.name;
    // Object shapes the components take, like ToastOptions or TableColumn. (…Props are covered by their component.)
    const shape = symbol.declarations?.find(ts.isInterfaceDeclaration);
    if (!declaration && shape && !name.endsWith("Props")) {
        shapes[name] = {
            description: docOf(symbol),
            props: propsOf(checker.getDeclaredTypeOfSymbol(symbol), shape),
        };
        continue;
    }
    if (!declaration) continue; // other types
    const type = checker.getTypeOfSymbolAtLocation(symbol, declaration);
    const signature = type.getCallSignatures()[0];
    if (!signature) continue; // constants like MESSAGES

    if (/^[A-Z]/.test(name)) {
        const param = signature.getParameters()[0];
        const paramDecl = param?.valueDeclaration;
        // Function components: the parameter's type. forwardRef components (`const X: ForwardRefExoticComponent<…>`):
        // the variable's type, since the call signature itself comes from React's types.
        const typeText = paramDecl && isOwn(paramDecl)
            ? paramDecl.type?.getText(sourceFile) ?? ""
            : ts.isVariableDeclaration(declaration) ? declaration.type?.getText(sourceFile) ?? "" : "";
        components[name] = {
            description: docOf(symbol),
            element: elementOf(typeText),
            props: param ? propsOf(checker.getTypeOfSymbolAtLocation(param, declaration), declaration) : [],
        };
    } else {
        functions[name] = {
            description: docOf(symbol),
            signature: `${name}${checker.signatureToString(signature)}`,
        };
    }
}

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify({
    package: PACKAGE,
    version: packageJson.version,
    repository: packageJson.homepage?.replace(/#.*$/, ""),
    license: packageJson.license,
    components,
    functions,
    shapes,
}, null, 2) + "\n");

console.log(`api.json: ${Object.keys(components).length} components, ${Object.keys(functions).length} functions, ${Object.keys(shapes).length} shapes (v${packageJson.version})`);
