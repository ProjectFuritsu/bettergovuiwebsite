// Group error and disabled
// An `error` about the whole group goes at the bottom. `disabled` turns off every field inside at once.
import { Fieldset, Input, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "28rem" }}>
            <Fieldset legend="How can we reach you?" error="Enter a mobile number or an email.">
                <Input label="Mobile number" type="tel" />
                <Input label="Email" type="email" />
            </Fieldset>
            <Fieldset legend="Previous permit (not needed for new businesses)" disabled>
                <Input label="Permit number" />
            </Fieldset>
        </Stack>
    );
}
