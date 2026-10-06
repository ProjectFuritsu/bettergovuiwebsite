// Reading the value
// With `value` and `onChange`, like a normal input. Or give it a `name` and read the form with FormData.
import { Input, Stack, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [name, setName] = useState("");
    return (
        <Stack style={{ maxWidth: "24rem" }}>
            <Input label="Business name" value={name} onChange={(event) => setName(event.target.value)} />
            <Text size="sm" muted>{name ? `Your permit will say "${name}".` : "Type a name to see it here."}</Text>
        </Stack>
    );
}
