// With a label
// The label is also the bar's name for screen readers. `showValue` adds the percentage.
import { Progress, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="lg" style={{ maxWidth: "28rem" }}>
            <Progress value={65} label="Uploading documents" showValue />
            <Progress value={2} max={4} label="Step 2 of 4" color="success" />
        </Stack>
    );
}
