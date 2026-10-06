import { Button, Group, Stack } from "bettergovregiondavaoui";
import { PageHeader } from "../components/PageHeader.jsx";
import { useTitle } from "../lib/useTitle.js";

export function NotFound() {
    useTitle("Page not found");
    return (
        <Stack gap="lg">
            <PageHeader eyebrow="404" title="Page not found">
                There's no page at this address. It may have moved, or the link may have a typo.
            </PageHeader>
            <Group>
                <Button href="/">Home</Button>
                <Button href="/getting-started" variant="outline">Getting started</Button>
                <Button href="/components" variant="outline">All components</Button>
            </Group>
        </Stack>
    );
}
