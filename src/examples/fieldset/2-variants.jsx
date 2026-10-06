// Variants
// `outline` (default), `filled`, or `plain` with no box.
import { Fieldset, Grid, Input } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Grid columns={2} minColumnWidth="15rem">
            <Fieldset legend="Filled" variant="filled">
                <Input label="First name" />
            </Fieldset>
            <Fieldset legend="Plain" variant="plain">
                <Input label="Last name" />
            </Fieldset>
        </Grid>
    );
}
