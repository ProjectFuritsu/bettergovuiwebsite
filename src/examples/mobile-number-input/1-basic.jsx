// Basic
// Shows +63 and spaces the number as you type. Pasting "0917-123-4567" or "+63 917 123 4567" works too. The form sends "+639171234567".
import { MobileNumberInput, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "20rem" }}>
            <MobileNumberInput name="mobile" description="We'll text you when your permit is ready." required />
        </Stack>
    );
}
