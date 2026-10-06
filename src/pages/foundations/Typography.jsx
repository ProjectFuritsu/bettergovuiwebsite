import { Code, Heading, Kbd, Link, Stack, Table, Text } from "bettergovregiondavaoui";
import { CodeBlock } from "../../components/CodeBlock.jsx";
import { Demo } from "../../components/Demo.jsx";
import { OnThisPage } from "../../components/OnThisPage.jsx";
import { PageHeader } from "../../components/PageHeader.jsx";
import { Section } from "../../components/Section.jsx";
import { useTitle } from "../../lib/useTitle.js";

const HEADINGS = [
    { level: 1, size: "28–36px", use: "The page title. One per page." },
    { level: 2, size: "24–30px", use: "Sections of the page" },
    { level: 3, size: "20–24px", use: "Parts of a section, card titles" },
    { level: 4, size: "20px", use: "Smaller parts" },
    { level: 5, size: "18px", use: "" },
    { level: 6, size: "16px", use: "" },
];

const TEXT_SIZES = [
    { size: "xs", px: "12px", use: "Fine print, captions" },
    { size: "sm", px: "14px", use: "Secondary text, table cells" },
    { size: "md", px: "16px", use: "Body text (default)" },
    { size: "lg", px: "18px", use: "Lead paragraphs" },
    { size: "xl", px: "20px", use: "Short, important statements" },
];

const TOC = [
    { id: "font", title: "Font", level: 2 },
    { id: "headings", title: "Headings", level: 2 },
    { id: "text", title: "Body text", level: 2 },
    { id: "inline", title: "Links, code and keys", level: 2 },
];

export function Typography() {
    useTitle("Typography");
    return (
        <Stack gap="xl">
            <PageHeader eyebrow="Foundations" title="Typography">
                <Code>Heading</Code> and <Code>Text</Code> give you consistent sizes and colors. They have no margins: put them in
                a <Code>Stack</Code> to space them.
            </PageHeader>

            <Section id="font" title="Font">
                <Text>
                    The kit doesn't load a font. Components use the font of the page, so set one on <Code>body</Code>. The
                    device's own font loads instantly and reads well on every phone; this site uses it:
                </Text>
                <CodeBlock language="css" code={`body {
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}`} />
            </Section>

            <Section id="headings" title="Headings">
                <Text>
                    Screen reader users jump between headings like a table of contents, so pick the level that fits the page's
                    outline: one <Code>level={"{1}"}</Code> per page, then 2 for sections, 3 inside those, and so on. To change only
                    the look, use <Code>size</Code>. The three biggest sizes shrink a little on small screens.
                </Text>
                <Table
                    aria-labelledby="headings"
                    rowKey="level"
                    columns={[
                        { key: "level", header: "Level", width: "5rem", render: (row) => <Code>{row.level}</Code> },
                        { key: "sample", header: "Looks like", render: (row) => <Text as="div" className={`heading-sample heading-sample-${row.level}`}>The quick brown fox</Text> },
                        { key: "size", header: "Size", width: "7rem" },
                        { key: "use", header: "Use it for" },
                    ]}
                    data={HEADINGS}
                />
                <Demo code={`<Heading level={2}>Business permits</Heading>
<Heading level={2} size={4}>An h2 that looks smaller</Heading>
<Heading level={3} color="primary">A colored h3</Heading>`}>
                    <Stack gap="sm">
                        <Heading level={2}>Business permits</Heading>
                        <Heading level={2} size={4}>An h2 that looks smaller</Heading>
                        <Heading level={3} color="primary">A colored h3</Heading>
                    </Stack>
                </Demo>
                <Text><Link href="/components/heading">All of Heading's props</Link></Text>
            </Section>

            <Section id="text" title="Body text">
                <Table
                    aria-labelledby="text"
                    rowKey="size"
                    columns={[
                        { key: "size", header: "size", width: "5rem", render: (row) => <Code>"{row.size}"</Code> },
                        { key: "sample", header: "Looks like", render: (row) => <Text size={row.size}>Pay your real property tax online.</Text> },
                        { key: "px", header: "Size", width: "6rem" },
                        { key: "use", header: "Use it for" },
                    ]}
                    data={TEXT_SIZES}
                />
                <Demo code={`<Text weight="semibold">Semibold</Text>
<Text muted>Muted, for hints and dates</Text>
<Text color="success">Approved</Text>
<Text truncate>A long line that gets cut off with "…" when it doesn't fit</Text>
<Text lineClamp={2}>A paragraph that stops after two lines…</Text>`}>
                    <Stack gap="xs" style={{ maxWidth: "22rem" }}>
                        <Text weight="semibold">Semibold</Text>
                        <Text muted>Muted, for hints and dates</Text>
                        <Text color="success">Approved</Text>
                        <Text truncate>A long line that gets cut off with "…" when it doesn't fit in its box</Text>
                        <Text lineClamp={2}>
                            A paragraph that stops after two lines, for previews in cards and lists. The rest is still in the page,
                            so screen readers and search engines read all of it.
                        </Text>
                    </Stack>
                </Demo>
                <Text>
                    Keep lines readable: about 60 to 80 characters. <Code>Container</Code> with <Code>size="sm"</Code> or{" "}
                    <Code>"md"</Code> does this for whole pages.
                </Text>
            </Section>

            <Section id="inline" title="Links, code and keys">
                <Demo code={`<Text>
    Read the <Link href="/requirements">requirements</Link> or the{" "}
    <Link href="https://www.gov.ph" external>GOV.PH portal</Link>.
</Text>
<Text>Your reference number is <Code>BP-2026-01234</Code>.</Text>
<Text>Press <Kbd>Ctrl</Kbd> + <Kbd>F</Kbd> to search the page.</Text>`}>
                    <Stack gap="xs">
                        <Text>
                            Read the <Link href="/requirements">requirements</Link> or the{" "}
                            <Link href="https://www.gov.ph" external>GOV.PH portal</Link>.
                        </Text>
                        <Text>Your reference number is <Code>BP-2026-01234</Code>.</Text>
                        <Text>Press <Kbd>Ctrl</Kbd> + <Kbd>F</Kbd> to search the page.</Text>
                    </Stack>
                </Demo>
                <Text>
                    Links in text are underlined by default, so people who can't tell colors apart can still find them. External
                    links get an arrow and tell screen readers they open a new tab.
                </Text>
            </Section>

            <OnThisPage items={TOC} />
        </Stack>
    );
}
