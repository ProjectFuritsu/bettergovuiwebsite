// Reading the number
// `onValueChange` gives the digits after +63, whether the number is complete, and the international format to save.
import { Code, MobileNumberInput, Stack, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [digits, setDigits] = useState("");
    const [details, setDetails] = useState({ valid: false, e164: null });
    return (
        <Stack style={{ maxWidth: "20rem" }}>
            <MobileNumberInput
                value={digits}
                onValueChange={(number, info) => {
                    setDigits(number);
                    setDetails(info);
                }}
            />
            <Text size="sm">
                {details.valid ? <>Save this: <Code>{details.e164}</Code></> : "Keep typing: 10 digits starting with 9."}
            </Text>
        </Stack>
    );
}
