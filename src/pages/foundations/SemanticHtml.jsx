import { Code, Link, List, ListItem, Stack, Table, Text } from "bettergovregiondavaoui";
import { CodeBlock } from "../../components/CodeBlock.jsx";
import { OnThisPage } from "../../components/OnThisPage.jsx";
import { PageHeader } from "../../components/PageHeader.jsx";
import { Section } from "../../components/Section.jsx";
import { sitePath } from "../../lib/paths.js";
import { useTitle } from "../../lib/useTitle.js";

const AS_VALUES = [
    { component: "Stack, Group, Grid", values: "div (default), main, header, footer, nav, section, article, aside, ul, ol" },
    { component: "Container", values: "the same, without ul and ol" },
    { component: "Card", values: "div (default), article, section, aside, li" },
    { component: "CardFooter", values: "div (default), footer" },
    { component: "CardTitle", values: "h2 – h6 (default h3)" },
    { component: "Text", values: "p (default), span, div, strong, em, small" },
];

const ELEMENTS = [
    ["main", "The page's own content. Only one per page."],
    ["header / footer", "The top and bottom of the page. Inside an article or section, they're that part's header and footer instead."],
    ["nav", "A group of links for getting around. With more than one, name each: aria-label=\"Main\", aria-label=\"Footer\"."],
    ["section", "A part of the page with its own heading. Point aria-labelledby at the heading so it shows up as a region."],
    ["article", "Something complete on its own, like a news post or a service card."],
    ["aside", "Side content, like help or related links."],
    ["ul / ol", "A list of things. Each child must be an <li> (<Card as=\"li\"> works). The bullets are removed for you."],
];

const TOC = [
    { id: "why", title: "Why it matters", level: 2 },
    { id: "as-prop", title: "The as prop", level: 2 },
    { id: "which", title: "Which one to use", level: 2 },
    { id: "already", title: "Already semantic", level: 2 },
];

export function SemanticHtml() {
    useTitle("Semantic HTML");
    return (
        <Stack gap="xl">
            <PageHeader eyebrow="Foundations" title="Semantic HTML">
                Elements like <Code>{"<main>"}</Code> and <Code>{"<nav>"}</Code> look like a plain <Code>{"<div>"}</Code>, but
                they tell screen readers, search engines and reader modes what each part of the page is.
            </PageHeader>

            <Section id="why" title="Why it matters">
                <Text>
                    Screen reader users can jump between landmarks (header, navigation, main content, footer) and lists the way
                    sighted people skim a page. A list of six cards built as a <Code>{"<ul>"}</Code> is announced as "list, 6
                    items"; built from <Code>{"<div>"}</Code>s, it's just text. For a whole page frame with the landmarks in place,
                    use <Link href={sitePath("/components/scaffold")}>Scaffold</Link>.
                </Text>
            </Section>

            <Section id="as-prop" title="The as prop">
                <Text>
                    You can always write the elements yourself in JSX. The layout components also take an <Code>as</Code> prop, so
                    the component <em>is</em> that element and you don't need an extra wrapper:
                </Text>
                <CodeBlock code={`<Container as="main">…</Container>

<Stack as="section" aria-labelledby="services-heading">
    <Heading level={2} id="services-heading">Services</Heading>
    <Grid as="ul">                        {/* a list: screen readers say "list, 6 items" */}
        <Card as="li">…</Card>
        <Card as="li">…</Card>
    </Grid>
</Stack>

<Card as="article">
    <CardTitle>Business permit</CardTitle>
    <CardFooter as="footer">…</CardFooter>
</Card>

<Group as="nav" aria-label="Footer">…links…</Group>`} />
                <Table
                    aria-labelledby="as-prop"
                    rowKey="component"
                    columns={[
                        { key: "component", header: "Component", width: "30%" },
                        { key: "values", header: <><Code>as</Code> can be</>, label: "as can be" },
                    ]}
                    data={AS_VALUES}
                />
            </Section>

            <Section id="which" title="Which one to use">
                <List spacing="sm">
                    {ELEMENTS.map(([element, text]) => (
                        <ListItem key={element}><Code>{element}</Code>: {text}</ListItem>
                    ))}
                </List>
            </Section>

            <Section id="already" title="Already semantic">
                <Text>The other components already use the right elements, so you don't need to think about them:</Text>
                <List spacing="xs">
                    <ListItem><Code>Heading</Code> is <Code>h1</Code>–<Code>h6</Code>, <Code>Divider</Code> is an <Code>{"<hr>"}</Code></ListItem>
                    <ListItem><Code>Breadcrumbs</Code> and <Code>Pagination</Code> are a <Code>{"<nav>"}</Code> with a list; <Code>Stepper</Code> is an <Code>{"<ol>"}</Code></ListItem>
                    <ListItem><Code>Modal</Code> and <Code>Drawer</Code> are a <Code>{"<dialog>"}</Code>; <Code>Accordion</Code> items are <Code>{"<details>"}</Code></ListItem>
                    <ListItem><Code>RadioGroup</Code> and <Code>Fieldset</Code> are a <Code>{"<fieldset>"}</Code> with a <Code>{"<legend>"}</Code></ListItem>
                    <ListItem><Code>Code</Code> is <Code>{"<code>"}</Code> / <Code>{"<pre>"}</Code> and <Code>Kbd</Code> is <Code>{"<kbd>"}</Code></ListItem>
                </List>
            </Section>

            <OnThisPage items={TOC} />
        </Stack>
    );
}
