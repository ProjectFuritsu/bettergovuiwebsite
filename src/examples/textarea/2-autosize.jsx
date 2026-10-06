// Grows as you type
// `autosize` starts at `rows` lines and grows; `maxRows` stops it and scrolls instead.
import { Stack, Textarea } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "28rem" }}>
            <Textarea label="Message" autosize rows={2} maxRows={6} placeholder="Type a few lines to see it grow…" />
        </Stack>
    );
}
