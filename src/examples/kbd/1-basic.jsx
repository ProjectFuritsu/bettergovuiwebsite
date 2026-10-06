// Keys
// For keyboard shortcuts and instructions.
import { Kbd, Stack, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="xs">
            <Text>Press <Kbd>Ctrl</Kbd> + <Kbd>F</Kbd> to find a word on the page.</Text>
            <Text>Press <Kbd>Tab</Kbd> to move to the next field, and <Kbd>Enter</Kbd> to send the form.</Text>
        </Stack>
    );
}
