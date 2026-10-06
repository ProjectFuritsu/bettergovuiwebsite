// While content loads
// Skeletons are hidden from screen readers: mark the area `aria-busy` and say "Loading" there instead.
import { Card, Group, Skeleton, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Card aria-busy="true" aria-label="Loading your applications" style={{ maxWidth: "24rem" }}>
            <Stack gap="md">
                <Group gap="sm">
                    <Skeleton circle height={40} />
                    <Stack gap="xs" style={{ flex: 1 }}>
                        <Skeleton width="60%" />
                        <Skeleton width="35%" height="0.75rem" />
                    </Stack>
                </Group>
                <Skeleton lines={3} />
            </Stack>
        </Card>
    );
}
