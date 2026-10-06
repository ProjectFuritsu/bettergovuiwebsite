// Weight and color
// `muted` for hints and dates. Colored text gets a slightly deeper shade, so it stays readable.
import { Stack, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="xs">
            <Text weight="medium">Medium</Text>
            <Text weight="semibold">Semibold</Text>
            <Text weight="bold">Bold</Text>
            <Text muted>Filed on October 1, 2026</Text>
            <Text color="success">Your permit has been approved.</Text>
            <Text color="danger">Your payment didn't go through.</Text>
        </Stack>
    );
}
