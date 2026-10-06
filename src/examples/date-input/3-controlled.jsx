// Reading the date
// `onValueChange` gives a JavaScript Date (or null when cleared), so there's no text to parse.
import { DateInput, Stack, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [date, setDate] = useState(null);
    return (
        <Stack style={{ maxWidth: "20rem" }}>
            <DateInput label="Pickup date" value={date} onValueChange={setDate} />
            <Text size="sm" muted>
                {date ? date.toLocaleDateString("en-PH", { dateStyle: "full" }) : "No date chosen."}
            </Text>
        </Stack>
    );
}
