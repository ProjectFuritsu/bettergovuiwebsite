// Other ID numbers
// Any number written in groups of digits. Separators are added as you type, and pasted numbers are cleaned up.
import { GroupedNumberInput, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "22rem" }}>
            <GroupedNumberInput label="SSS number" groups={[2, 7, 1]} name="sss" />
            <GroupedNumberInput label="PhilHealth number" groups={[2, 9, 1]} name="philhealth" />
            <GroupedNumberInput label="Pag-IBIG MID number" groups={[4, 4, 4]} name="pagibig" />
        </Stack>
    );
}
