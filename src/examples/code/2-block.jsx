// Block with a copy button
// `block` keeps line breaks and scrolls sideways when long. `copyable` adds a Copy button, translated by LanguageProvider.
import { Code } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Code block copyable>
            {"npm install bettergovregiondavaoui\nnpm run dev"}
        </Code>
    );
}
