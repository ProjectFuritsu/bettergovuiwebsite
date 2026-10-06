// Look different, keep the meaning
// `size` changes only the look. Here a section heading (h2) is made to look smaller, without breaking the page's outline.
import { Heading, Stack, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="xs">
            <Heading level={2} size={5}>Requirements</Heading>
            <Text>A valid ID, barangay clearance and proof of address.</Text>
        </Stack>
    );
}
