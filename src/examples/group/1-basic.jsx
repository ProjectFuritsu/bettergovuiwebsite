// A row
// Side by side, wrapping onto the next line on small screens.
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
