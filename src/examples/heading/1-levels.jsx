// Levels
// h1 to h6. Use one `level={1}` per page, then 2 for sections, 3 inside those, and so on.
import { Heading, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="sm">
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <Heading level={4}>Heading 4</Heading>
            <Heading level={5}>Heading 5</Heading>
            <Heading level={6}>Heading 6</Heading>
        </Stack>
    );
}
