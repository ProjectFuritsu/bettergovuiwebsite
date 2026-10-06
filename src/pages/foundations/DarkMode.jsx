import { Alert, Badge, Button, Card, CardDescription, CardFooter, CardTitle, Code, Group, Link, Stack, Text } from "bettergovregiondavaoui";
import { CodeBlock } from "../../components/CodeBlock.jsx";
import { Demo } from "../../components/Demo.jsx";
import { OnThisPage } from "../../components/OnThisPage.jsx";
import { PageHeader } from "../../components/PageHeader.jsx";
import { Section } from "../../components/Section.jsx";
import { useSettings } from "../../lib/settings.js";
import { useTitle } from "../../lib/useTitle.js";

function SampleCard() {
    return (
        <Card variant="outline" style={{ maxWidth: "22rem" }}>
            <Group justify="space-between">
                <CardTitle>Business permit</CardTitle>
                <Badge color="success">Approved</Badge>
            </Group>
            <CardDescription>Ready for pickup at the Business Permits Office, ground floor.</CardDescription>
            <CardFooter>
                <Button size="sm">Download</Button>
                <Button size="sm" variant="text">Details</Button>
            </CardFooter>
        </Card>
    );
}

const TOGGLE_CODE = `<!-- In index.html's <head>: set the theme before the page draws, so it doesn't flash white. -->
<script>
    var saved = localStorage.getItem("theme");
    var dark = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme = dark ? "dark" : "light";
</script>`;

const BUTTON_CODE = `function ThemeToggle() {
    const [theme, setTheme] = useState(document.documentElement.dataset.theme);
    const next = theme === "dark" ? "light" : "dark";

    function toggle() {
        document.documentElement.dataset.theme = next;
        localStorage.setItem("theme", next);
        setTheme(next);
    }

    return (
        <Button variant="text" aria-label={\`Switch to \${next} mode\`} leftIcon={theme === "dark" ? <Sun /> : <Moon />} onClick={toggle} />
    );
}`;

const TOC = [
    { id: "turn-on", title: "Turn it on", level: 2 },
    { id: "one-part", title: "Just one part of the page", level: 2 },
    { id: "follow-device", title: "Follow the device", level: 2 },
    { id: "colors", title: "Colors in dark mode", level: 2 },
];

export function DarkMode() {
    useTitle("Dark mode");
    const { theme } = useSettings();
    return (
        <Stack gap="xl">
            <PageHeader eyebrow="Foundations" title="Dark mode">
                Every component has a dark theme. It's easier on the eyes at night and saves battery on many phones.
            </PageHeader>

            <Section id="turn-on" title="Turn it on">
                <Text>Add <Code>data-theme="dark"</Code> to <Code>{"<html>"}</Code>, and every component switches:</Text>
                <CodeBlock code={`<html data-theme="dark">`} language="html" />
                <Text>
                    Make sure the page itself uses the theme's colors (<Code>background: var(--surface)</Code> and{" "}
                    <Code>color: var(--text)</Code> on <Code>body</Code>), as in <Link href="/getting-started">Getting started</Link>.
                </Text>
            </Section>

            <Section id="one-part" title="Just one part of the page">
                <Text>
                    <Code>data-theme="dark"</Code> also works on any element, to make just that part of the page dark, like a
                    footer or a featured section.
                    {theme === "dark" && " The whole page is dark right now; switch to light mode at the top to compare."}
                </Text>
                <Demo code={`<section data-theme="dark" style={{ background: "var(--surface)" }}>\n    <Card>…</Card>\n</section>`}>
                    <Group gap="md" align="stretch">
                        <SampleCard />
                        <div data-theme="dark" style={{ padding: "1rem", borderRadius: "var(--radius)", background: "var(--surface)" }}>
                            <SampleCard />
                        </div>
                    </Group>
                </Demo>
            </Section>

            <Section id="follow-device" title="Follow the device">
                <Text>
                    The kit doesn't pick the theme for you, so you decide: always light, always dark, or follow the device and let
                    people change it. This site does the last one. Set the theme early, in the page's <Code>{"<head>"}</Code>:
                </Text>
                <CodeBlock code={TOGGLE_CODE} language="html" />
                <Text>Then a button to switch, which remembers the choice:</Text>
                <CodeBlock code={BUTTON_CODE} />
            </Section>

            <Section id="colors" title="Colors in dark mode">
                <Text>
                    <Code>--surface</Code>, <Code>--text</Code> and the borders have dark values. The brand and status colors stay
                    the same, and colored text and outlines automatically get a lighter shade so they stay readable on the dark
                    background.
                </Text>
                <Demo>
                    <Stack gap="sm">
                        <Alert color="success" title="Payment received">We've emailed your official receipt.</Alert>
                        <Alert color="danger" variant="outline" title="Missing document">Upload a valid ID to continue.</Alert>
                    </Stack>
                </Demo>
                <Text size="sm" muted>
                    If you change <Code>--surface</Code> or <Code>--text</Code> for dark mode, set them inside{" "}
                    <Code>[data-theme="dark"]</Code> and check the contrast of text on them.
                </Text>
            </Section>

            <OnThisPage items={TOC} />
        </Stack>
    );
}
