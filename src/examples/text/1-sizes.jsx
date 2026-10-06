// Sizes
// `xs` 12px to `xl` 20px. The default `md` (16px) is right for body text: smaller is hard to read on phones.
import { Stack, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="xs">
            <Text size="xs">Extra small: fine print and captions</Text>
            <Text size="sm">Small: secondary text and table cells</Text>
            <Text size="md">Medium: body text</Text>
            <Text size="lg">Large: lead paragraphs</Text>
            <Text size="xl">Extra large: short, important statements</Text>
        </Stack>
    );
}
