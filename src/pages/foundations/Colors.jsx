import {
    Alert,
    Badge,
    Button,
    Code,
    Group,
    Input,
    Progress,
    Stack,
    Switch,
    Table,
    Text,
} from "bettergovregiondavaoui";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "../../components/CodeBlock.jsx";
import { Demo } from "../../components/Demo.jsx";
import { OnThisPage } from "../../components/OnThisPage.jsx";
import { PageHeader } from "../../components/PageHeader.jsx";
import { Section } from "../../components/Section.jsx";
import { contrastRatio } from "../../lib/color.js";
import { useSettings } from "../../lib/settings.js";
import { useTitle } from "../../lib/useTitle.js";

const BRAND = [
    { name: "--primary", use: "Main actions, links, focus rings" },
    { name: "--secondary", use: "Quieter actions (slate gray)" },
    { name: "--tertiary", use: "A third brand color (teal)" },
    { name: "--accent", use: "Highlights (violet)" },
];

const STATUS = [
    { name: "--info", use: "Information, tips" },
    { name: "--success", use: "Done, approved, online" },
    { name: "--warning", use: "Needs attention" },
    { name: "--danger", use: "Errors, deleting" },
];

const NEUTRAL = [
    { name: "--surface", use: "Page and card background" },
    { name: "--surface-muted", use: "Soft backgrounds, code" },
    { name: "--text", use: "Body text" },
    { name: "--text-muted", use: "Hints, dates, descriptions" },
    { name: "--border", use: "Lines and card edges" },
    { name: "--border-strong", use: "Form control outlines" },
];

const THEME_COLORS = ["primary", "secondary", "tertiary", "accent", "info", "success", "warning", "danger"];

function Swatches({ tokens }) {
    // Re-read the values when the theme changes: --surface, --text and the borders differ in dark mode.
    useSettings();
    const style = getComputedStyle(document.documentElement);
    return (
        <ul className="swatch-grid">
            {tokens.map((token) => (
                <li key={token.name} className="swatch">
                    <div className="swatch-color" style={{ background: `var(${token.name})` }} />
                    <div className="swatch-info">
                        <Code>{token.name}</Code>
                        <Text size="xs" muted>{style.getPropertyValue(token.name).trim()} · {token.use}</Text>
                    </div>
                </li>
            ))}
        </ul>
    );
}

function ThemePlayground() {
    const [primary, setPrimary] = useState("#1864ab");
    const [radius, setRadius] = useState(4);
    const ratio = contrastRatio(primary, "#ffffff");
    const readable = ratio >= 4.5;
    const css = `:root {\n    --primary: ${primary};\n    --radius: ${radius}px;\n}`;

    return (
        <Stack gap="md">
            <div className="theme-playground">
                <Stack gap="md">
                    <Stack gap="xs">
                        <label htmlFor="playground-primary"><Text as="span" weight="semibold" size="sm">Primary color</Text></label>
                        <Group gap="sm">
                            <input
                                id="playground-primary"
                                type="color"
                                className="color-input"
                                value={primary}
                                onChange={(event) => setPrimary(event.target.value)}
                            />
                            <Code>{primary}</Code>
                        </Group>
                    </Stack>
                    <Stack gap="xs">
                        <label htmlFor="playground-radius"><Text as="span" weight="semibold" size="sm">Corner radius: {radius}px</Text></label>
                        <input
                            id="playground-radius"
                            type="range"
                            className="range-input"
                            min={0}
                            max={16}
                            value={radius}
                            onChange={(event) => setRadius(Number(event.target.value))}
                        />
                    </Stack>
                    <Alert
                        color={readable ? "success" : "warning"}
                        icon={readable ? <Check /> : <X />}
                        title={`White text: ${ratio.toFixed(2)}:1`}
                    >
                        {readable
                            ? "Readable: white text on this color passes the 4.5:1 minimum."
                            : "Too light for white text. Pick a darker shade, or add autoContrast to filled buttons, badges and alerts."}
                    </Alert>
                </Stack>
                <div style={{ "--primary": primary, "--radius": `${radius}px` }}>
                    <Stack gap="md">
                        <Group gap="sm">
                            <Button>Apply now</Button>
                            <Button variant="outline">See requirements</Button>
                            <Badge>New</Badge>
                        </Group>
                        <Input label="Email" placeholder="juan@example.com" />
                        <Switch label="Send me updates by SMS" defaultChecked />
                        <Progress value={60} label="Application" showValue />
                    </Stack>
                </div>
            </div>
            <CodeBlock code={css} language="css" />
        </Stack>
    );
}

const TOKEN_ROWS = [
    { token: "--primary, --secondary, --tertiary, --accent", use: "The brand colors" },
    { token: "--info, --success, --warning, --danger", use: "The status colors" },
    { token: "--surface, --surface-muted", use: "Backgrounds" },
    { token: "--text, --text-muted", use: "Text" },
    { token: "--border, --border-strong", use: "Lines and form control outlines" },
    { token: "--radius", use: "Rounded corners (default 8px)" },
    { token: "--spacing-xs … --spacing-xl", use: "What the spacing presets mean (4, 8, 12, 16, 24px)" },
];

const TOC = [
    { id: "brand", title: "Brand colors", level: 2 },
    { id: "status", title: "Status colors", level: 2 },
    { id: "neutral", title: "Surfaces, text and lines", level: 2 },
    { id: "color-prop", title: "The color prop", level: 2 },
    { id: "playground", title: "Make it yours", level: 2 },
    { id: "tokens", title: "All tokens", level: 2 },
];

export function Colors() {
    useTitle("Colors and theming");
    return (
        <Stack gap="xl">
            <PageHeader eyebrow="Foundations" title="Colors and theming">
                The colors, corner radius and spacing are CSS variables. Override them in your own CSS to match your office's
                brand, and every component follows.
            </PageHeader>

            <Section id="brand" title="Brand colors">
                <Swatches tokens={BRAND} />
            </Section>

            <Section id="status" title="Status colors">
                <Text>For messages, badges and states. They mean the same thing everywhere, so don't use them as decoration.</Text>
                <Swatches tokens={STATUS} />
            </Section>

            <Section id="neutral" title="Surfaces, text and lines">
                <Text>These change in dark mode. Switch the theme at the top of the page to see their dark values.</Text>
                <Swatches tokens={NEUTRAL} />
            </Section>

            <Section id="color-prop" title="The color prop">
                <Text>
                    Most components take a <Code>color</Code>: one of the theme colors by name, or any CSS color. Colored text and
                    outlines get a deeper shade (lighter in dark mode), so they stay readable.
                </Text>
                <Demo code={`<Button color="primary">primary</Button>
<Button color="success">success</Button>
<Button color="danger" variant="outline">danger</Button>
<Badge color="#2f9e44">any CSS color</Badge>
<Button color="#ffd43b" autoContrast>autoContrast</Button>`}>
                    <Stack gap="md">
                        <Group gap="sm">
                            {THEME_COLORS.map((color) => <Button key={color} color={color}>{color}</Button>)}
                        </Group>
                        <Group gap="sm">
                            {THEME_COLORS.map((color) => <Badge key={color} color={color}>{color}</Badge>)}
                            <Badge color="#2f9e44">any CSS color</Badge>
                        </Group>
                        <Group gap="sm">
                            <Button color="danger" variant="outline">danger</Button>
                            <Button color="#ffd43b" autoContrast>autoContrast</Button>
                        </Group>
                    </Stack>
                </Demo>
                <Text size="sm" muted>
                    With <Code>color="warning"</Code>, text on the solid color switches to black by itself, because white isn't
                    readable on orange. For your own light colors, add <Code>autoContrast</Code>.
                </Text>
            </Section>

            <Section id="playground" title="Make it yours">
                <Text>
                    Pick a primary color and a corner radius, then copy the CSS. The check tells you whether white text on your
                    color meets the WCAG contrast minimum.
                </Text>
                <Demo>
                    <ThemePlayground />
                </Demo>
            </Section>

            <Section id="tokens" title="All tokens">
                <Table
                    aria-labelledby="tokens"
                    rowKey="token"
                    columns={[
                        { key: "token", header: "Variable", render: (row) => <Code>{row.token}</Code> },
                        { key: "use", header: "Used for" },
                    ]}
                    data={TOKEN_ROWS}
                />
                <CodeBlock code={`:root {\n    --primary: #1864ab;   /* your brand color */\n    --radius: 4px;        /* less rounded corners */\n}`} language="css" />
            </Section>

            <OnThisPage items={TOC} />
        </Stack>
    );
}
