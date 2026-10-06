// Error
import { Stack, Textarea } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "28rem" }}>
            <Textarea label="Reason for the request" error="Tell us why you need the document, in a few words." required />
        </Stack>
    );
}
