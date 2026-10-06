// Basic
// The browser's own date picker, which works well on phones and with screen readers.
import { DateInput, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "20rem" }}>
            <DateInput label="Date of birth" autoComplete="bday" />
        </Stack>
    );
}
