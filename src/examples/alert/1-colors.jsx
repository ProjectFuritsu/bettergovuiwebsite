// Colors
// `info` (default), `success`, `warning` and `danger`, each with a matching icon.
import { Alert, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="sm">
            <Alert title="Bring the original">Bring the original of every document you uploaded when you pick up your permit.</Alert>
            <Alert color="success" title="Application submitted">We'll text you when it's ready, usually in 3 working days.</Alert>
            <Alert color="warning" title="Renewal due soon">Renew before January 20 to avoid a 25% surcharge.</Alert>
            <Alert color="danger" title="Payment failed">Your card was declined. No money was taken.</Alert>
        </Stack>
    );
}
