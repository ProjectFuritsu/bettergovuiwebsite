import { Badge, Button, Code, Group, Heading, Kbd, Link, List, ListItem, Stack, Table, Text } from "bettergovregiondavaoui";
import { Check } from "lucide-react";
import { Demo } from "../../components/Demo.jsx";
import { OnThisPage } from "../../components/OnThisPage.jsx";
import { PageHeader } from "../../components/PageHeader.jsx";
import { Section } from "../../components/Section.jsx";
import { useTitle } from "../../lib/useTitle.js";

const BUILT_IN = [
    { title: "Keyboard", text: "Everything works without a mouse, and focus is always visible." },
    { title: "Screen readers", text: "Proper labels, roles and descriptions. Errors, required fields and the current page or step are announced." },
    { title: "Contrast", text: "Text, links, outlines and form controls meet the WCAG contrast guidelines in light and dark mode." },
    { title: "Reduced motion", text: "Animations slow down or stop when people ask their device for less motion." },
    { title: "Landmarks", text: "Scaffold and the blocks use real <header>, <nav>, <main> and <footer>, and add a \"Skip to main content\" link." },
    { title: "Native controls", text: "The browser's own date picker, <select>, <dialog> and <details>, which assistive tech already knows well." },
];

const KEYBOARD = [
    { component: "Tabs", keys: ["←", "→"], what: "Move between tabs (↑ ↓ when vertical), Home / End for the first and last" },
    { component: "RadioGroup", keys: ["←", "→"], what: "Move between the choices" },
    { component: "Modal, Drawer", keys: ["Esc"], what: "Close. While one is open, the page behind can't be reached: it's the browser's own modal <dialog>." },
    { component: "Tooltip", keys: ["Tab", "Esc"], what: "Shows on focus; Escape hides it" },
    { component: "Accordion", keys: ["Enter", "Space"], what: "Open and close an item" },
    { component: "Scaffold", keys: ["Tab"], what: "The first Tab press shows \"Skip to main content\"" },
    { component: "Table", keys: ["Enter", "Space"], what: "Sort by a sortable column (its heading is a button)" },
];

const TOC = [
    { id: "built-in", title: "What's built in", level: 2 },
    { id: "your-part", title: "What's up to you", level: 2 },
    { id: "keyboard", title: "Keyboard", level: 2 },
    { id: "checklist", title: "Before you launch", level: 2 },
];

export function Accessibility() {
    useTitle("Accessibility");
    return (
        <Stack gap="xl">
            <PageHeader eyebrow="Foundations" title="Accessibility">
                Government websites are for everyone, including people who use a screen reader, a keyboard, a slow phone or a
                magnifier. The components do most of the work; a few things are up to you.
            </PageHeader>

            <Section id="built-in" title="What's built in">
                <List icon={<Check />} color="success" spacing="sm">
                    {BUILT_IN.map((item) => (
                        <ListItem key={item.title}><strong>{item.title}.</strong> {item.text}</ListItem>
                    ))}
                </List>
                <Text>
                    The default <Code>--primary</Code> (<Code>#0d6efd</Code>) gives white text exactly the 4.5:1 minimum. If you
                    change it, check white text is still readable: the <Link href="/foundations/colors#playground">theme
                    playground</Link> does this for you.
                </Text>
            </Section>

            <Section id="your-part" title="What's up to you">
                <Stack gap="lg">
                    <Stack gap="xs">
                        <Heading level={3}>Name icon-only buttons</Heading>
                        <Text>
                            Give a button with only an icon an <Code>aria-label</Code>, e.g.{" "}
                            <Code>{'<Button leftIcon={<Trash2 />} aria-label="Delete" />'}</Code>. See <Link href="/foundations/icons#icon-only">Icons</Link>.
                        </Text>
                    </Stack>
                    <Stack gap="xs">
                        <Heading level={3}>Pick the right heading levels</Heading>
                        <Text>
                            One <Code>level={"{1}"}</Code> per page, then 2, 3 and so on, without skipping. Use <Code>size</Code> to
                            change only the look.
                        </Text>
                    </Stack>
                    <Stack gap="xs">
                        <Heading level={3}>Help light colors with autoContrast</Heading>
                        <Text>
                            With <Code>color="warning"</Code>, text on the solid color turns black by itself. For your own light
                            colors, add <Code>autoContrast</Code> to filled buttons, badges and alerts:
                        </Text>
                        <Demo code={`<Button color="#ffd43b">White text: hard to read</Button>
<Button color="#ffd43b" autoContrast>autoContrast: black text</Button>`}>
                            <Group gap="sm">
                                <Button color="#ffd43b">White text: hard to read</Button>
                                <Button color="#ffd43b" autoContrast>autoContrast: black text</Button>
                            </Group>
                        </Demo>
                    </Stack>
                    <Stack gap="xs">
                        <Heading level={3}>Describe pictures</Heading>
                        <Text>
                            Give images in <Code>HeroBlock</Code>, <Code>NewsBlock</Code> and <Code>Avatar</Code> an{" "}
                            <Code>imageAlt</Code> or <Code>alt</Code> that says what they show. Use an empty <Code>""</Code> for
                            pictures that are only decoration.
                        </Text>
                    </Stack>
                    <Stack gap="xs">
                        <Heading level={3}>Label every field, name every table</Heading>
                        <Text>
                            Every field needs a <Code>label</Code> (or an <Code>aria-label</Code> when a visible one really doesn't
                            fit, like a search box). Give tables a <Code>caption</Code>. Don't rely on color alone: a red border
                            comes with an <Code>error</Code> message.
                        </Text>
                    </Stack>
                    <Stack gap="xs">
                        <Heading level={3}>Set the page language</Heading>
                        <Text>
                            <Code>{'<html lang="fil">'}</Code> tells screen readers how to pronounce the page. See{" "}
                            <Link href="/foundations/languages">Languages</Link>.
                        </Text>
                    </Stack>
                </Stack>
            </Section>

            <Section id="keyboard" title="Keyboard">
                <Text>
                    <Kbd>Tab</Kbd> and <Kbd>Shift</Kbd> + <Kbd>Tab</Kbd> move between controls everywhere, and{" "}
                    <Kbd>Enter</Kbd> or <Kbd>Space</Kbd> press them. Some components add more:
                </Text>
                <Table
                    aria-labelledby="keyboard"
                    rowKey="component"
                    columns={[
                        { key: "component", header: "Component", width: "25%" },
                        { key: "keys", header: "Keys", width: "20%", render: (row) => <Group gap="xs">{row.keys.map((key) => <Kbd key={key}>{key}</Kbd>)}</Group> },
                        { key: "what", header: "What they do" },
                    ]}
                    data={KEYBOARD}
                />
            </Section>

            <Section id="checklist" title="Before you launch">
                <List type="ordered" spacing="sm">
                    <ListItem>Use the whole site with only the keyboard. Can you reach and use everything, and always see where you are?</ListItem>
                    <ListItem>Try it with a screen reader: NVDA on Windows, VoiceOver on iPhone and Mac, TalkBack on Android.</ListItem>
                    <ListItem>Zoom the page to 200%. Nothing should be cut off or overlap.</ListItem>
                    <ListItem>Check the page outline: one h1, and headings in order.</ListItem>
                    <ListItem>Turn on "reduce motion" on your device and check that nothing still swoops around.</ListItem>
                    <ListItem>Have native speakers check the Filipino and Bisaya texts.</ListItem>
                    <ListItem>Test on a low-cost Android phone on mobile data, not only on office Wi-Fi.</ListItem>
                </List>
                <Group gap="sm">
                    <Badge color="info" variant="outline">WCAG 2.2 AA</Badge>
                    <Text size="sm" muted>A good target for any public website.</Text>
                </Group>
            </Section>

            <OnThisPage items={TOC} />
        </Stack>
    );
}
