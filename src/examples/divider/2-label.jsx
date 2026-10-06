// With a label
// Text in the line, e.g. "or" between two ways of doing something.
import { Button, Divider, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="md" style={{ maxWidth: "20rem" }}>
            <Button fullWidth>Continue with a mobile number</Button>
            <Divider label="or" />
            <Button fullWidth variant="outline">Continue with email</Button>
            <Divider label="New here?" labelPosition="left" />
        </Stack>
    );
}
