// Required and error
import { Select, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "24rem" }}>
            <Select label="Civil status" placeholder="Choose one" options={["Single", "Married", "Widowed", "Separated"]} required error="Choose your civil status." />
        </Stack>
    );
}
