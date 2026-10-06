import { Card, CardDescription, CardTitle, Grid, Heading, Stack } from "bettergovregiondavaoui";
import { Link as RouterLink } from "react-router";
import { OnThisPage } from "../components/OnThisPage.jsx";
import { PageHeader } from "../components/PageHeader.jsx";
import { BLOCKS, COMPONENT_GROUPS, COMPONENTS } from "../data/registry.js";
import { useTitle } from "../lib/useTitle.js";

const sectionId = (title) => title.toLowerCase().replace(/\s+/g, "-");

function EntryGrid({ items }) {
    return (
        <Grid as="ul" columns={3} minColumnWidth="14rem">
            {items.map((item) => (
                <Card as="li" key={item.slug} hoverable className="link-card">
                    <CardTitle>
                        <RouterLink to={item.to} className="card-link">{item.name}</RouterLink>
                    </CardTitle>
                    <CardDescription>{item.summary}</CardDescription>
                </Card>
            ))}
        </Grid>
    );
}

/** /components and /blocks: every component (by group) or block, as cards. */
export function IndexPage({ kind }) {
    const isBlocks = kind === "blocks";
    useTitle(isBlocks ? "Blocks" : "Components");

    if (isBlocks) {
        return (
            <Stack gap="xl">
                <PageHeader eyebrow="Blocks" title="Blocks">
                    Whole sections of a page, built from the components: fill in the text and buttons with props.
                    Put them together yourself, or let <code>LandingPage</code> do it.
                </PageHeader>
                <EntryGrid items={BLOCKS} />
            </Stack>
        );
    }

    return (
        <Stack gap="xl">
            <PageHeader eyebrow="Components" title="Components">
                {COMPONENTS.length} components for public service websites, in {COMPONENT_GROUPS.length} groups.
                Each page has live examples you can copy and every prop.
            </PageHeader>
            {COMPONENT_GROUPS.map((group) => (
                <Stack gap="md" as="section" key={group.title} aria-labelledby={sectionId(group.title)}>
                    <Heading level={2} id={sectionId(group.title)}>{group.title}</Heading>
                    <EntryGrid items={group.items} />
                </Stack>
            ))}
            <OnThisPage items={COMPONENT_GROUPS.map((group) => ({ id: sectionId(group.title), title: group.title, level: 2 }))} />
        </Stack>
    );
}
