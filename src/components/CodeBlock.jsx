import { Code } from "bettergovregiondavaoui";
import { useMemo } from "react";
import { highlight } from "sugar-high";

/** A block of code with a Copy button. JavaScript and JSX get colors; other languages are shown plain. */
export function CodeBlock({ code, language = "jsx", className }) {
    const text = code.trimEnd();
    const html = useMemo(() => (language === "jsx" || language === "js" ? highlight(text) : null), [text, language]);
    return (
        <Code block copyable className={["code-block", className].filter(Boolean).join(" ")} data-language={language}>
            {html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text}
        </Code>
    );
}
