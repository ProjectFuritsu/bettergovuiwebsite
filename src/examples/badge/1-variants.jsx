// Variants and colors
// `light` (default) is readable in every color. Use the same color for the same status everywhere.
import { Badge, Group, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="sm">
            <Group gap="sm">
                <Badge color="success">Approved</Badge>
                <Badge color="warning">Pending</Badge>
                <Badge color="danger">Rejected</Badge>
                <Badge color="info">New</Badge>
                <Badge color="secondary">Draft</Badge>
            </Group>
            <Group gap="sm">
                <Badge variant="filled" color="success">Approved</Badge>
                <Badge variant="filled" color="warning">Pending</Badge>
                <Badge variant="filled" color="danger">Rejected</Badge>
            </Group>
            <Group gap="sm">
                <Badge variant="outline" color="success">Approved</Badge>
                <Badge variant="outline" color="warning">Pending</Badge>
                <Badge variant="outline" color="danger">Rejected</Badge>
            </Group>
        </Stack>
    );
}
