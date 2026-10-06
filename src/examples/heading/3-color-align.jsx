// Color and alignment
import { Heading, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="sm">
            <Heading level={3} color="primary">Online services</Heading>
            <Heading level={3} align="center">Centered</Heading>
            <Heading level={3} align="right" color="tertiary">Right and teal</Heading>
        </Stack>
    );
}
