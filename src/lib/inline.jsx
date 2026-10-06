import { Code } from "bettergovregiondavaoui";
import { Fragment } from "react";

/** `code` and **bold** inside a line of text, as elements. */
export function inline(text) {
    return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/).map((part, index) => {
        if (part.startsWith("`") && part.endsWith("`") && part.length > 1) return <Code key={index}>{part.slice(1, -1)}</Code>;
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
        return <Fragment key={index}>{part}</Fragment>;
    });
}
