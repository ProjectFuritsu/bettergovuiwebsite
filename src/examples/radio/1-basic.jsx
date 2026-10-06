// A group
// Only one can be chosen. The group's label is read with every choice, and arrow keys move between them. Put `name` on the group.
import { Radio, RadioGroup } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <RadioGroup label="How will you submit your documents?" name="submitBy" defaultValue="online">
            <Radio value="online" label="Upload them online" />
            <Radio value="walk-in" label="Bring them to the office" />
            <Radio value="courier" label="Send them by courier" />
        </RadioGroup>
    );
}
