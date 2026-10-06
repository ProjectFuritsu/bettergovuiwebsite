// Variants
// `light` (default), `filled` and `outline`.
import { Alert, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="sm">
            <Alert variant="light" color="success">Light</Alert>
            <Alert variant="filled" color="success">Filled</Alert>
            <Alert variant="outline" color="success">Outline</Alert>
            <Alert variant="filled" color="warning">Filled warning: black text, since white isn't readable on orange</Alert>
        </Stack>
    );
}
