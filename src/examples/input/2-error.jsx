// Errors
// `error` shows the message, turns the border red and tells screen readers the value is invalid. Say how to fix it, not only what's wrong.
import { Input, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "24rem" }}>
            <Input label="Email" defaultValue="juan@example" error="Enter an email address like juan@example.com" />
            <Input label="Business name" error />
        </Stack>
    );
}
