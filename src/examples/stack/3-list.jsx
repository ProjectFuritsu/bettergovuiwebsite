// As a list
// `as="ul"` with `Card as="li"`: screen readers say "list, 3 items". The bullets are removed for you.
import { Card, CardDescription, CardTitle, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack as="ul" gap="sm" style={{ maxWidth: "26rem" }}>
            <Card as="li"><CardTitle>Barangay clearance</CardTitle><CardDescription>Ready for pickup</CardDescription></Card>
            <Card as="li"><CardTitle>Business permit</CardTitle><CardDescription>Being reviewed</CardDescription></Card>
            <Card as="li"><CardTitle>Building permit</CardTitle><CardDescription>Waiting for payment</CardDescription></Card>
        </Stack>
    );
}
