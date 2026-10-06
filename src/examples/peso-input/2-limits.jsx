// Limits and whole pesos
// `min` and `max` block the form with a clear message. `decimals={0}` drops the centavos.
import { PesoInput, Stack, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [amount, setAmount] = useState(null);
    return (
        <Stack style={{ maxWidth: "20rem" }}>
            <PesoInput label="Donation" description="From ₱100 to ₱50,000." min={100} max={50000} decimals={0} onValueChange={setAmount} />
            <Text size="sm" muted>Amount as a number: {amount ?? "none yet"}</Text>
        </Stack>
    );
}
