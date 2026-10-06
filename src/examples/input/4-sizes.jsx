// Sizes
// Each size is the same height as a Button of that size, so they line up in a row.
import { Button, Group, Input, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "28rem" }}>
            <Input size="sm" placeholder="Small" aria-label="Small" />
            <Input placeholder="Medium (default)" aria-label="Medium" />
            <Input size="lg" placeholder="Large" aria-label="Large" />
            <Group gap="sm" wrap={false}>
                <Input placeholder="Reference number" aria-label="Reference number" style={{ flex: 1 }} />
                <Button>Track</Button>
            </Group>
        </Stack>
    );
}
