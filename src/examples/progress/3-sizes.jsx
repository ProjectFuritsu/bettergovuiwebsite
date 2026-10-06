// Thickness
import { Progress, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="md" style={{ maxWidth: "28rem" }}>
            <Progress value={40} size="xs" aria-label="Extra small" />
            <Progress value={50} size="sm" aria-label="Small" />
            <Progress value={60} aria-label="Medium" />
            <Progress value={70} size="lg" aria-label="Large" color="tertiary" />
            <Progress value={80} size="xl" aria-label="Extra large" color="accent" />
        </Stack>
    );
}
