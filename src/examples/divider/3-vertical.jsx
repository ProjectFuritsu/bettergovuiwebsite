// Vertical, dashed and colored
// `orientation="vertical"` between items in a row.
import { Divider, Group, Link, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="lg">
            <Group gap="md">
                <Link href="/privacy">Privacy</Link>
                <Divider orientation="vertical" />
                <Link href="/accessibility">Accessibility</Link>
                <Divider orientation="vertical" />
                <Link href="/contact">Contact</Link>
            </Group>
            <Divider variant="dashed" />
            <Divider variant="dotted" color="primary" />
        </Stack>
    );
}
