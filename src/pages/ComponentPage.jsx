import { Breadcrumbs, Button, Group, Heading, Stack, Text } from "bettergovregiondavaoui";
import { SlidersHorizontal } from "lucide-react";
import { Link as RouterLink, useParams } from "react-router";
import { ApiReference } from "../components/ApiReference.jsx";
import { CodeBlock } from "../components/CodeBlock.jsx";
import { Example } from "../components/Example.jsx";
import { OnThisPage } from "../components/OnThisPage.jsx";
import { PageHeader } from "../components/PageHeader.jsx";
import { RichText } from "../components/RichText.jsx";
import { findEntry, PACKAGE } from "../data/registry.js";
import { examplesFor } from "../lib/examples.js";
import { sitePath } from "../lib/paths.js";
import { useTitle } from "../lib/useTitle.js";
import { apiHeadings, exampleAnchor } from "../lib/toc.js";
import { NotFound } from "./NotFound.jsx";

/** A component's or block's page: what it is, how to import it, examples, then every prop. */
export function ComponentPage({ kind }) {
    const { slug } = useParams();
    const entry = findEntry(kind, slug);
    useTitle(entry?.name);
    if (!entry) return <NotFound />;

    const examples = examplesFor(entry.slug);
    const imports = [...entry.exports, ...entry.functions].join(", ");
    const isBlock = kind === "blocks";
    const toc = [
        { id: "usage", title: "Usage", level: 2 },
        ...(examples.length ? [{ id: "examples", title: "Examples", level: 2 }] : []),
        ...examples.map((example) => ({ id: exampleAnchor(example.id), title: example.title, level: 3 })),
        { id: "api", title: "Props", level: 2 },
        ...apiHeadings(entry),
    ];

    return (
        <Stack gap="xl">
            <Breadcrumbs>
                <RouterLink to={isBlock ? "/blocks" : "/components"}>{isBlock ? "Blocks" : "Components"}</RouterLink>
                {!isBlock && <RouterLink to={`/components#${entry.group.toLowerCase().replace(/\s+/g, "-")}`}>{entry.group}</RouterLink>}
                <span>{entry.name}</span>
            </Breadcrumbs>

            <PageHeader
                eyebrow={isBlock ? "Block" : entry.group}
                title={entry.name}
                actions={(
                    <Group gap="sm">
                        <Button href={sitePath(`/studio/${entry.slug}`)} variant="outline" size="sm" leftIcon={<SlidersHorizontal />}>
                            Open in UI Studio
                        </Button>
                    </Group>
                )}
            />
            <RichText text={entry.description} size="lg" />

            <Stack gap="sm" as="section" aria-labelledby="usage">
                <Heading level={2} id="usage">Usage</Heading>
                <CodeBlock code={`import { ${imports} } from "${PACKAGE}";`} />
            </Stack>

            {examples.length > 0 && (
                <Stack gap="xl" as="section" aria-labelledby="examples">
                    <Heading level={2} id="examples">Examples</Heading>
                    {examples.map((example) => <Example key={example.id} example={example} />)}
                </Stack>
            )}

            <Stack gap="md" as="section" aria-labelledby="api">
                <Heading level={2} id="api">Props</Heading>
                <Text muted>
                    Every prop is also documented in your editor: hover over a component or a prop to see what it does.
                </Text>
                <ApiReference entry={entry} />
            </Stack>

            <OnThisPage items={toc} />
        </Stack>
    );
}
