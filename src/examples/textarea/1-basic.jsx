// Basic
import { Stack, Textarea } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "28rem" }}>
            <Textarea
                label="Describe your concern"
                description="Include the date, place and any reference numbers."
                rows={4}
            />
        </Stack>
    );
}
