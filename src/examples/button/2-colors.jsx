// Colors
// Any theme color by name, or any CSS color. Use `danger` for actions that delete or can't be undone.
import { Button, Group } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Approve</Button>
            <Button color="danger">Delete</Button>
            <Button color="danger" variant="outline">Withdraw</Button>
            <Button color="#6741d9">Custom</Button>
        </Group>
    );
}
