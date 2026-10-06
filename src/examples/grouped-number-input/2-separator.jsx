// Separator and message
// Any `separator`, and an `invalidMessage` when someone leaves the field with an incomplete number.
import { GroupedNumberInput, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "22rem" }}>
            <GroupedNumberInput
                label="Reference number"
                groups={[4, 4]}
                separator=" "
                invalidMessage="Enter all 8 digits of the reference number."
            />
        </Stack>
    );
}
