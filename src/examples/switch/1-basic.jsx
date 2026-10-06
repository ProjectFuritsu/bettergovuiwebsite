// On and off
// For settings that apply right away. It's a real checkbox underneath, so `checked` and `onChange` work as usual.
import { Stack, Switch } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack>
            <Switch label="Email notifications" defaultChecked />
            <Switch label="SMS notifications" description="Standard text rates may apply." />
            <Switch label="Paperless billing" disabled />
        </Stack>
    );
}
