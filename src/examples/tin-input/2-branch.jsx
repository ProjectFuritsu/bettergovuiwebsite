// With branch code
// `branchCode` also asks for the branch code after the 9 digits (000 or 00000 for a head office or an individual). `onValueChange` gives them split out.
import { Stack, Text, TinInput } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [parts, setParts] = useState({ tin: "", branch: "" });
    return (
        <Stack style={{ maxWidth: "22rem" }}>
            <TinInput branchCode onValueChange={(digits, details) => setParts(details)} />
            <Text size="sm" muted>TIN: {parts.tin || "…"} · Branch: {parts.branch || "…"}</Text>
        </Stack>
    );
}
