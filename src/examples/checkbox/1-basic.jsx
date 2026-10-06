// Label and description
// Clicking the label toggles the box. Checkboxes send "on" with the form when checked.
import { Checkbox, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack>
            <Checkbox label="Send me SMS updates about my application" defaultChecked />
            <Checkbox
                label="I agree to the Data Privacy Notice"
                description="We only use your information to process this application."
                required
            />
            <Checkbox label="Not available yet" disabled />
        </Stack>
    );
}
