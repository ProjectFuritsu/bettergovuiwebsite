// Controlled, with an error
// `value` and `onValueChange` on the group.
import { Radio, RadioGroup, Stack, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [type, setType] = useState("");
    return (
        <Stack>
            <RadioGroup
                label="Type of business"
                value={type}
                onValueChange={setType}
                required
                error={type ? undefined : "Choose the type of business."}
            >
                <Radio value="sole" label="Sole proprietorship" />
                <Radio value="partnership" label="Partnership" />
                <Radio value="corporation" label="Corporation" />
            </RadioGroup>
            {type && <Text size="sm" muted>You chose: {type}</Text>}
        </Stack>
    );
}
