// Icon
// Your own icon, or `icon={false}` for none.
import { Alert, Stack } from "bettergovregiondavaoui";
import { CalendarDays } from "lucide-react";

export default function Example() {
    return (
        <Stack gap="sm">
            <Alert icon={<CalendarDays />} color="tertiary" title="Holiday">The office is closed on November 1 and 2.</Alert>
            <Alert icon={false}>No icon.</Alert>
        </Stack>
    );
}
