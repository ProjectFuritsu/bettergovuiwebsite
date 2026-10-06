import { Badge, Code, Group, Heading, Link, Stack, Table, Text } from "bettergovregiondavaoui";
import { Fragment } from "react";
import { api } from "../data/registry.js";
import { inline } from "../lib/inline.jsx";
import { sitePath } from "../lib/paths.js";
import { anchorFor } from "../lib/toc.js";
import { CodeBlock } from "./CodeBlock.jsx";
import { RichText } from "./RichText.jsx";

// The props tables, helper functions and object shapes of one page, all from the generated api.json.

/** Types that have their own explanation in Foundations. */
const TYPE_LINKS = {
    Size: sitePath("/foundations/spacing#size"),
    Color: sitePath("/foundations/colors#color-prop"),
};

function TypeText({ type }) {
    return (
        <Code className="type-code">
            {type.split(/\b(Size|Color)\b/).map((part, index) => (
                TYPE_LINKS[part] ? <Link key={index} href={TYPE_LINKS[part]} underline="hover">{part}</Link> : <Fragment key={index}>{part}</Fragment>
            ))}
        </Code>
    );
}

/** Defaults like `"md"` or `true` are code; ones like "the --radius token" are words. */
function DefaultValue({ value }) {
    const literal = value.match(/^("[^"]*"|-?\d[\w.%]*|true|false|null)(.*)$/s);
    if (!literal) return <>{inline(value)}</>;
    return <><Code>{literal[1]}</Code>{literal[2] && inline(literal[2])}</>;
}

const COLUMNS = [
    {
        key: "name",
        header: "Prop",
        width: "24%",
        render: (prop) => (
            <Group gap="xs">
                <Code className="prop-name">{prop.name}</Code>
                {prop.required && <Badge size="xs" color="danger">required</Badge>}
            </Group>
        ),
    },
    { key: "type", header: "Type", width: "28%", render: (prop) => <TypeText type={prop.type} /> },
    {
        key: "description",
        header: "Description",
        render: (prop) => (
            <Stack gap="xs">
                <RichText text={prop.description} size="sm" />
                {prop.defaultValue && <Text size="sm" muted>Default: <DefaultValue value={prop.defaultValue} /></Text>}
            </Stack>
        ),
    },
];

function PropsTable({ props, labelledBy }) {
    return <Table className="props-table" columns={COLUMNS} data={props} rowKey="name" aria-labelledby={labelledBy} striped />;
}

/** "Other props go to the <button>", so people know `onClick`, `disabled` and `aria-*` work as usual. */
function ElementNote({ element }) {
    if (!element) return null;
    if (element === "element") {
        return <Text size="sm" muted>Other props, like <Code>id</Code>, <Code>className</Code>, <Code>style</Code> and <Code>aria-*</Code>, go to the component's root element.</Text>;
    }
    return <Text size="sm" muted>Other props, like <Code>id</Code>, <Code>className</Code>, event handlers and <Code>aria-*</Code>, go to the <Code>{`<${element}>`}</Code> element.</Text>;
}

export function ApiReference({ entry }) {
    return (
        <Stack gap="xl">
            {entry.exports.map((name) => {
                const component = api.components[name];
                if (!component) return null;
                const id = anchorFor(name);
                return (
                    <Stack gap="sm" key={name} as="section" aria-labelledby={id}>
                        <Heading level={3} id={id}><Code>{name}</Code></Heading>
                        {name !== entry.exports[0] && <RichText text={component.description} muted />}
                        {component.props.length > 0
                            ? <PropsTable props={component.props} labelledBy={id} />
                            : <Text muted>No props of its own.</Text>}
                        <ElementNote element={component.element} />
                    </Stack>
                );
            })}

            {entry.functions.map((name) => {
                const fn = api.functions[name];
                if (!fn) return null;
                const id = anchorFor(name);
                return (
                    <Stack gap="sm" key={name} as="section" aria-labelledby={id}>
                        <Heading level={3} id={id}><Code>{`${name}()`}</Code></Heading>
                        <CodeBlock code={fn.signature} language="text" />
                        <RichText text={fn.description} />
                    </Stack>
                );
            })}

            {entry.shapes.map((name) => {
                const shape = api.shapes[name];
                if (!shape) return null;
                const id = anchorFor(name);
                return (
                    <Stack gap="sm" key={name} as="section" aria-labelledby={id}>
                        <Group gap="sm">
                            <Heading level={3} id={id}><Code>{name}</Code></Heading>
                            <Badge color="secondary" variant="outline" size="sm">object</Badge>
                        </Group>
                        <RichText text={shape.description} muted />
                        <PropsTable props={shape.props} labelledBy={id} />
                    </Stack>
                );
            })}
        </Stack>
    );
}
