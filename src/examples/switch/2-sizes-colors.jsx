// Sizes and colors
import { Group, Switch } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group gap="xl">
            <Switch size="sm" label="Small" defaultChecked />
            <Switch label="Medium" defaultChecked color="success" />
            <Switch size="lg" label="Large" defaultChecked color="tertiary" />
        </Group>
    );
}
