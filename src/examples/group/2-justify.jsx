// Spread out
// `justify="space-between"` puts the first item on the left and the last on the right, like a toolbar.
import { Badge, Button, Group, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group justify="space-between">
            <Group gap="sm">
                <Text weight="semibold">BP-2026-01234</Text>
                <Badge color="success">Approved</Badge>
            </Group>
            <Button size="sm" variant="outline">Download</Button>
        </Group>
    );
}
