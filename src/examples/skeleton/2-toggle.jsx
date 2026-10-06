// Swapping in the content
import { Avatar, Button, Card, Group, Skeleton, Stack, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [loading, setLoading] = useState(true);
    return (
        <Stack align="start">
            <Card aria-busy={loading} style={{ width: "100%", maxWidth: "24rem" }}>
                <Group gap="sm">
                    {loading ? <Skeleton circle height={40} /> : <Avatar name="Maria Santos" />}
                    <Stack gap="xs" style={{ flex: 1 }}>
                        {loading ? <Skeleton width="50%" /> : <Text weight="semibold">Maria Santos</Text>}
                        {loading ? <Skeleton width="30%" height="0.75rem" /> : <Text size="sm" muted>Applicant</Text>}
                    </Stack>
                </Group>
            </Card>
            <Button variant="outline" size="sm" onClick={() => setLoading(!loading)}>
                {loading ? "Show content" : "Show skeleton"}
            </Button>
        </Stack>
    );
}
