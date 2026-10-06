// Basic
// Commas as you type ("15,000") and centavos when you leave the field ("15,000.00"). The form sends "15000.00".
import { PesoInput, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "20rem" }}>
            <PesoInput label="Declared capital" name="capital" />
        </Stack>
    );
}
