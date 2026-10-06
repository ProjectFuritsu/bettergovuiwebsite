// Variants
// `filled` (the default) for the main action, `outline` for other actions, and `text` for the least important ones.
import { Button, Group } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group>
            <Button>Submit</Button>
            <Button variant="outline">Save draft</Button>
            <Button variant="text">Cancel</Button>
        </Group>
    );
}
