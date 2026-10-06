// Equal widths
// `grow` makes every item share the width equally.
import { Button, Group } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group grow>
            <Button variant="outline">Back</Button>
            <Button>Next</Button>
        </Group>
    );
}
