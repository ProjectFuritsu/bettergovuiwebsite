// A column with even space
// The default gap is `md` (12px). Text and Heading have no margins, so a Stack spaces them.
import { Button, Heading, Stack, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="md" style={{ maxWidth: "24rem" }}>
            <Heading level={3}>Renew your business permit</Heading>
            <Text>Renew online before January 20 to avoid a 25% surcharge.</Text>
            <Button>Start renewal</Button>
        </Stack>
    );
}
