import { Avatar, Button, Code, Group, Stack, Table, Text } from "bettergovregiondavaoui";
import { Demo } from "../../components/Demo.jsx";
import { OnThisPage } from "../../components/OnThisPage.jsx";
import { PageHeader } from "../../components/PageHeader.jsx";
import { Section } from "../../components/Section.jsx";
import { useTitle } from "../../lib/useTitle.js";

const SPACING = [
    { preset: "xs", token: "--spacing-xs", px: 4 },
    { preset: "sm", token: "--spacing-sm", px: 8 },
    { preset: "md", token: "--spacing-md", px: 12 },
    { preset: "lg", token: "--spacing-lg", px: 16 },
    { preset: "xl", token: "--spacing-xl", px: 24 },
];

const SIZE_MEANINGS = [
    { component: "Button, Input, Select, Checkbox, Badge…", meaning: "The control's size. Inputs, selects and buttons of the same size are the same height, so they line up in a row." },
    { component: "Text, List", meaning: "Font size: xs 12px, sm 14px, md 16px, lg 18px, xl 20px" },
    { component: "Container", meaning: "Maximum width: xs 540px, sm 720px, md 960px, lg 1140px, xl 1320px" },
    { component: "Modal", meaning: "Width: xs 320px, sm 400px, md 512px, lg 640px, xl 800px" },
    { component: "Drawer", meaning: "Width (or height): xs 256px, sm 320px, md 400px, lg 512px, xl 640px" },
    { component: "Avatar", meaning: "xs 24px, sm 32px, md 40px, lg 56px, xl 80px" },
    { component: "Progress", meaning: "Thickness: xs 4px, sm 6px, md 8px, lg 12px, xl 16px" },
    { component: "Stack, Group, Grid, Card padding…", meaning: "Spacing: the scale above (4–24px)" },
];

const TOC = [
    { id: "spacing", title: "Spacing scale", level: 2 },
    { id: "size", title: "The size prop", level: 2 },
    { id: "radius", title: "Corner radius", level: 2 },
];

export function Spacing() {
    useTitle("Spacing and sizes");
    return (
        <Stack gap="xl">
            <PageHeader eyebrow="Foundations" title="Spacing and sizes">
                One scale for the space between things, and the same five presets, <Code>xs</Code> to <Code>xl</Code>, for the
                size of everything.
            </PageHeader>

            <Section id="spacing" title="Spacing scale">
                <Text>
                    <Code>gap</Code>, <Code>padding</Code> and other spacing props take a preset, a number in pixels, or any CSS
                    length. The presets are CSS variables, so you can change what they mean.
                </Text>
                <Table
                    aria-labelledby="spacing"
                    rowKey="preset"
                    columns={[
                        { key: "preset", header: "Preset", width: "6rem", render: (row) => <Code>"{row.preset}"</Code> },
                        { key: "token", header: "Variable", width: "10rem", render: (row) => <Code>{row.token}</Code> },
                        { key: "px", header: "Size", width: "5rem", render: (row) => `${row.px}px` },
                        { key: "bar", header: "", render: (row) => <div className="scale-bar" style={{ width: row.px * 4 }} aria-hidden="true" /> },
                    ]}
                    data={SPACING}
                />
            </Section>

            <Section id="size" title="The size prop">
                <Text>Every <Code>size</Code> takes one of three kinds of value:</Text>
                <Demo code={`<Button size="xs">xs</Button>
<Button size="xl">xl</Button>   {/* a preset */}
<Button size={20}>20</Button>   {/* a number in pixels */}
<Button size="1.5rem">1.5rem</Button>   {/* any CSS length */}`}>
                    <Stack gap="md">
                        <Group gap="sm" align="center">
                            {["xs", "sm", "md", "lg", "xl"].map((size) => <Button key={size} size={size}>{size}</Button>)}
                        </Group>
                        <Group gap="sm" align="center">
                            <Button size={20} variant="outline">size={"{20}"}</Button>
                            <Button size="1.5rem" variant="outline">size="1.5rem"</Button>
                        </Group>
                        <Group gap="sm" align="center">
                            {["xs", "sm", "md", "lg", "xl"].map((size) => <Avatar key={size} size={size} name="Maria Santos" />)}
                        </Group>
                    </Stack>
                </Demo>
                <Text>What the presets mean depends on the component:</Text>
                <Table
                    aria-labelledby="size"
                    rowKey="component"
                    columns={[
                        { key: "component", header: "Component", width: "35%" },
                        { key: "meaning", header: "What size sets" },
                    ]}
                    data={SIZE_MEANINGS}
                />
                <Text>
                    Make tap targets at least 44px on phones. The default <Code>"md"</Code> buttons and fields are tall enough;
                    be careful with <Code>"xs"</Code> and <Code>"sm"</Code> on pages people use with their thumbs.
                </Text>
            </Section>

            <Section id="radius" title="Corner radius">
                <Text>
                    <Code>--radius</Code> (8px) rounds cards, buttons, fields and dialogs. Change it once for the whole site, or
                    use the <Code>radius</Code> prop on a single Badge, Avatar, Card or Tabs.
                </Text>
                <Demo code={`<Button style={{ "--radius": "0px" }}>0px</Button>
<Button style={{ "--radius": "4px" }}>4px</Button>
<Button>8px (default)</Button>
<Button style={{ "--radius": "999px" }}>999px</Button>`}>
                    <Group gap="sm">
                        <Button style={{ "--radius": "0px" }}>0px</Button>
                        <Button style={{ "--radius": "4px" }}>4px</Button>
                        <Button>8px (default)</Button>
                        <Button style={{ "--radius": "999px" }}>999px</Button>
                    </Group>
                </Demo>
            </Section>

            <OnThisPage items={TOC} />
        </Stack>
    );
}
