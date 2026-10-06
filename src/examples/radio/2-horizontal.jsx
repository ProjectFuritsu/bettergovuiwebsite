// In a row, with descriptions
import { Radio, RadioGroup } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <RadioGroup label="Delivery" orientation="horizontal" gap="xl" defaultValue="pickup">
            <Radio value="pickup" label="Pick up" description="Free, ready in 3 days" />
            <Radio value="delivery" label="Deliver to me" description="₱150, 5 to 7 days" />
        </RadioGroup>
    );
}
