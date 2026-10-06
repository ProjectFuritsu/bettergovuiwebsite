import { Button, Group, Stack } from "bettergovregiondavaoui";
import { PageHeader } from "../components/PageHeader.jsx";
import { sitePath } from "../lib/paths.js";
import { useTitle } from "../lib/useTitle.js";

export function NotFound() {
    useTitle("Page not found");
    return (
        <Stack gap="lg">
            <PageHeader eyebrow="404" title="Page not found">
                There's no page at this address. It may have moved, or the link may have a typo.
            </PageHeader>
            <Group>
                <Button href={sitePath("/")}>Home</Button>
                <Button href={sitePath("/getting-started")} variant="outline">Getting started</Button>
                <Button href={sitePath("/components")} variant="outline">All components</Button>
            </Group>
        </Stack>
    );
}
