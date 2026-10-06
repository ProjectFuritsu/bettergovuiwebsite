// Error, color and size
import { Checkbox, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack>
            <Checkbox label="I confirm the information is true" error="Check this box to continue." />
            <Checkbox label="Success color" color="success" defaultChecked />
            <Checkbox label="Large" size="lg" defaultChecked />
        </Stack>
    );
}
