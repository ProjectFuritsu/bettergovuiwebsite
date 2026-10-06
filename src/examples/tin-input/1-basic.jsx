// TIN
// A BIR Tax Identification Number, shown as 123-456-789. The form sends the digits.
import { Stack, TinInput } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "20rem" }}>
            <TinInput name="tin" />
        </Stack>
    );
}
