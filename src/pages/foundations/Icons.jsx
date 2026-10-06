import { Badge, Button, Code, Group, Input, Link, Stack, Text, Tooltip } from "bettergovregiondavaoui";
import { Check, Download, FileText, Search, Send, Trash2 } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock.jsx";
import { Demo } from "../../components/Demo.jsx";
import { OnThisPage } from "../../components/OnThisPage.jsx";
import { PageHeader } from "../../components/PageHeader.jsx";
import { Section } from "../../components/Section.jsx";
import { useTitle } from "../../lib/useTitle.js";

const TOC = [
    { id: "set", title: "Pick an icon set", level: 2 },
    { id: "in-components", title: "Icons in components", level: 2 },
    { id: "icon-only", title: "Icon-only buttons", level: 2 },
];

export function Icons() {
    useTitle("Icons");
    return (
        <Stack gap="xl">
            <PageHeader eyebrow="Foundations" title="Icons">
                The kit doesn't come with icons, so it stays small. Use any React icon set; the components size and space them
                for you.
            </PageHeader>

            <Section id="set" title="Pick an icon set">
                <Text>
                    These docs use <Link href="https://lucide.dev" external>Lucide</Link>: clean outline icons, and each one you
                    import adds only that icon to your site.
                </Text>
                <CodeBlock code="npm install lucide-react" language="bash" />
                <CodeBlock code={`import { FileText } from "lucide-react";`} />
                <Text>
                    Lucide icons are hidden from screen readers by default (<Code>aria-hidden="true"</Code>), which is right for
                    icons next to text: the text already says what it is.
                </Text>
            </Section>

            <Section id="in-components" title="Icons in components">
                <Text>
                    Pass an icon to <Code>leftIcon</Code> or <Code>rightIcon</Code> (Button, Badge, Input, Tab), <Code>icon</Code>{" "}
                    (NavLink, List, Alert, FeaturesBlock items). It's sized to match the component automatically.
                </Text>
                <Demo code={`<Button leftIcon={<Send />}>Submit application</Button>
<Button variant="outline" rightIcon={<Download />}>Download form</Button>
<Badge color="success" leftIcon={<Check />}>Approved</Badge>
<Input leftIcon={<Search />} placeholder="Search services" aria-label="Search services" />`}>
                    <Stack gap="md" style={{ maxWidth: "28rem" }}>
                        <Group gap="sm">
                            <Button leftIcon={<Send />}>Submit application</Button>
                            <Button variant="outline" rightIcon={<Download />}>Download form</Button>
                        </Group>
                        <Group gap="sm">
                            <Badge color="success" leftIcon={<Check />}>Approved</Badge>
                            <Badge color="info" leftIcon={<FileText />}>3 documents</Badge>
                        </Group>
                        <Input leftIcon={<Search />} placeholder="Search services" aria-label="Search services" />
                    </Stack>
                </Demo>
            </Section>

            <Section id="icon-only" title="Icon-only buttons">
                <Text>
                    A button with an icon and no text is square. It has no words for screen readers to say, so give it an{" "}
                    <Code>aria-label</Code>. A <Code>Tooltip</Code> shows the same words to people using a mouse or keyboard.
                </Text>
                <Demo code={`<Tooltip label="Delete draft">
    <Button leftIcon={<Trash2 />} aria-label="Delete draft" variant="outline" color="danger" />
</Tooltip>`}>
                    <Group gap="sm">
                        <Tooltip label="Delete draft">
                            <Button leftIcon={<Trash2 />} aria-label="Delete draft" variant="outline" color="danger" />
                        </Tooltip>
                        <Tooltip label="Download PDF">
                            <Button leftIcon={<Download />} aria-label="Download PDF" variant="outline" />
                        </Tooltip>
                    </Group>
                </Demo>
            </Section>

            <OnThisPage items={TOC} />
        </Stack>
    );
}
