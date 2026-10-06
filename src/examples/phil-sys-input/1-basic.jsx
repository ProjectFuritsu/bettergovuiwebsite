// PhilSys Card Number
// The 16-digit card number (PCN) printed on the PhilID, shown as 1234-5678-9012-3456. Not the 12-digit PhilSys Number (PSN), which is meant to stay private.
import { PhilSysInput, Stack, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [complete, setComplete] = useState(false);
    return (
        <Stack style={{ maxWidth: "22rem" }}>
            <PhilSysInput name="pcn" onValueChange={(digits, details) => setComplete(details.complete)} />
            <Text size="sm" muted>{complete ? "Complete." : "16 digits."}</Text>
        </Stack>
    );
}
