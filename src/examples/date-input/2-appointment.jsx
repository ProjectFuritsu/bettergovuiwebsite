// Appointments
// `min` keeps dates in the past from being picked; `withTime` asks for a time too.
import { DateInput, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "20rem" }}>
            <DateInput label="Appointment" description="Monday to Friday, 8 AM to 4 PM." min={new Date()} withTime />
        </Stack>
    );
}
