// Sizes
// A preset from `xs` to `xl`, a number in pixels, or any CSS length. `md` is the same height as a `md` Input.
import { Button, Group } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group align="center">
            <Button size="xs">Extra small</Button>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra large</Button>
        </Group>
    );
}
