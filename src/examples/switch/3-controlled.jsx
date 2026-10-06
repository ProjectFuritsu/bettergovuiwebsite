// Controlled
import { Stack, Switch, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [on, setOn] = useState(true);
    return (
        <Stack>
            <Switch label="Remind me before my permit expires" checked={on} onChange={(event) => setOn(event.target.checked)} />
            <Text size="sm" muted>{on ? "We'll text you 30 days before." : "No reminders."}</Text>
        </Stack>
    );
}
