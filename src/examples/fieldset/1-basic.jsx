// Group related fields
// The legend is read before each field inside, so "Street" becomes "Business address, Street".
import { Fieldset, Input } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Fieldset legend="Business address" description="Where customers can find you." style={{ maxWidth: "28rem" }}>
            <Input label="Street" autoComplete="address-line1" />
            <Input label="Barangay" />
        </Fieldset>
    );
}
