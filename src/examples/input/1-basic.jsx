// Label and description
// Clicking the label focuses the field. The description sits between the label and the field, where people look first.
import { Input, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "24rem" }}>
            <Input label="Full name" placeholder="Juan Dela Cruz" autoComplete="name" />
            <Input
                label="Email"
                description="We'll send your receipt here."
                type="email"
                placeholder="juan@example.com"
                autoComplete="email"
                required
            />
        </Stack>
    );
}
