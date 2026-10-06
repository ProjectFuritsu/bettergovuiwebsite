// Sizes, variants and shape
import { Avatar, Group, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="md">
            <Group align="center">
                <Avatar name="Maria Santos" size="xs" />
                <Avatar name="Maria Santos" size="sm" />
                <Avatar name="Maria Santos" size="md" />
                <Avatar name="Maria Santos" size="lg" />
                <Avatar name="Maria Santos" size="xl" />
            </Group>
            <Group>
                <Avatar name="Jose Reyes" variant="filled" />
                <Avatar name="Ana Lim" variant="filled" color="tertiary" />
                <Avatar name="City Treasurer" radius={8} color="secondary" />
            </Group>
        </Stack>
    );
}
