import {
    Alert,
    Button,
    Card,
    CardDescription,
    CardTitle,
    Code,
    Container,
    Grid,
    Group,
    Heading,
    Link,
    MobileNumberInput,
    Stack,
    Text,
} from "bettergovregiondavaoui";
import { Accessibility, ArrowRight, Gauge, Landmark, Languages, LayoutTemplate } from "lucide-react";
import { CodeBlock } from "../components/CodeBlock.jsx";
import { Demo } from "../components/Demo.jsx";
import { OnThisPage } from "../components/OnThisPage.jsx";
import { PageHeader } from "../components/PageHeader.jsx";
import { Section } from "../components/Section.jsx";
import { BLOCKS, COMPONENT_GROUPS, COMPONENTS, PACKAGE, REPOSITORY, VERSION } from "../data/registry.js";
import { inline } from "../lib/inline.jsx";
import { useTitle } from "../lib/useTitle.js";

const WHY = [
    {
        Icon: Landmark,
        title: "Made for citizen services",
        text: "Fields for PSGC addresses, +63 mobile numbers, pesos, PhilSys and TIN numbers. Blocks for services, advisories and office hours.",
    },
    {
        Icon: Languages,
        title: "English, Filipino and Bisaya",
        text: "Every built-in text, including what screen readers say, in all three. One `LanguageProvider` switches them all.",
    },
    {
        Icon: Accessibility,
        title: "Accessible by default",
        text: "Keyboard support, screen reader labels, real HTML landmarks, a skip link, readable contrast in both themes, and less motion when asked.",
    },
    {
        Icon: Gauge,
        title: "Light for slow phones",
        text: "No dependencies besides React, and under 50 KB gzipped. It uses the browser's own date picker, dialogs and `<details>`.",
    },
    {
        Icon: LayoutTemplate,
        title: "A page in minutes",
        text: "`LandingPage` and 9 blocks: header, hero, services, news, FAQ, contact and more, ready to fill in with props.",
    },
];

const SIGN_UP_CODE = `import { Button, Container, Heading, MobileNumberInput, Stack, Text } from "${PACKAGE}";

export function SignUp() {
    return (
        <Container as="main" size="sm">
            <form>
                <Stack gap="lg">
                    <Heading level={1}>Create an account</Heading>
                    <Text muted>It only takes a minute.</Text>
                    <MobileNumberInput name="mobile" required />
                    <Button type="submit" fullWidth>Continue</Button>
                </Stack>
            </form>
        </Container>
    );
}`;

function SignUpDemo() {
    return (
        <Container size="sm">
            <form onSubmit={(event) => event.preventDefault()}>
                <Stack gap="lg">
                    {/* An h2 here: this page already has its h1. */}
                    <Heading level={2} size={1}>Create an account</Heading>
                    <Text muted>It only takes a minute.</Text>
                    <MobileNumberInput name="mobile" required />
                    <Button type="submit" fullWidth>Continue</Button>
                </Stack>
            </form>
        </Container>
    );
}

const TOC = [
    { id: "why", title: "Why BetterGov UI", level: 2 },
    { id: "install", title: "Install", level: 2 },
    { id: "setup", title: "Set up", level: 2 },
    { id: "frameworks", title: "Next.js and routers", level: 2 },
    { id: "languages", title: "Choose a language", level: 2 },
    { id: "whats-inside", title: "What's inside", level: 2 },
    { id: "studio", title: "UI Studio", level: 2 },
    { id: "help", title: "Help and contributing", level: 2 },
];

export function GettingStarted() {
    useTitle("Getting started");
    return (
        <Stack gap="xl">
            <PageHeader
                eyebrow={`BetterGov UI · v${VERSION}`}
                title="Getting started"
                actions={(
                    <Group gap="sm">
                        <Button href="/components" rightIcon={<ArrowRight />}>Browse components</Button>
                        <Button href={REPOSITORY} target="_blank" variant="outline">View on GitHub</Button>
                    </Group>
                )}
            >
                Accessible React components and page blocks for Philippine government websites. Made for BetterGov Region
                Davao: in English, Filipino and Bisaya, light on slow phones, and ready for citizen services.
            </PageHeader>

            <Section id="why" title="Why BetterGov UI">
                <Text>
                    Most UI kits are general-purpose. This one is made for one job: public service websites in the Philippines.
                </Text>
                <Grid as="ul" columns={3} minColumnWidth="14rem">
                    {WHY.map(({ Icon, title, text }) => (
                        <Card as="li" key={title} variant="filled">
                            <span className="feature-icon" aria-hidden="true"><Icon /></span>
                            <CardTitle>{title}</CardTitle>
                            <CardDescription>{inline(text)}</CardDescription>
                        </Card>
                    ))}
                </Grid>
            </Section>

            <Section id="install" title="Install">
                <CodeBlock code={`npm install ${PACKAGE}`} language="bash" />
                <Text>
                    It needs React 18 or newer, and works with Vite, Next.js and other React setups. TypeScript types are included.
                    It's still early (version 0.x), so read the{" "}
                    <Link href="/changelog">changelog</Link> when you update.
                </Text>
            </Section>

            <Section id="setup" title="Set up">
                <ol className="steps">
                    <li>
                        <Stack gap="sm">
                            <Heading level={3}>Add the styles once</Heading>
                            <Text>In your app's entry file, for example <Code>main.jsx</Code> or your root layout:</Text>
                            <CodeBlock code={`import "${PACKAGE}/styles.css";`} />
                        </Stack>
                    </li>
                    <li>
                        <Stack gap="sm">
                            <Heading level={3}>Give the page the theme's colors</Heading>
                            <Text>So the page around the components matches them, in light and dark mode:</Text>
                            <CodeBlock code={"body {\n    margin: 0;\n    background: var(--surface);\n    color: var(--text);\n}"} language="css" />
                        </Stack>
                    </li>
                    <li>
                        <Stack gap="sm">
                            <Heading level={3}>Use the components</Heading>
                            <Text>Here's a sign-up form. Type a mobile number in any format: it's cleaned up as you go.</Text>
                            <Demo code={SIGN_UP_CODE}>
                                <SignUpDemo />
                            </Demo>
                        </Stack>
                    </li>
                </ol>
            </Section>

            <Section id="frameworks" title="Next.js and routers">
                <Text>
                    The package is marked <Code>"use client"</Code>, so you can use the components straight from Next.js server
                    components. Import the styles in your root layout:
                </Text>
                <CodeBlock code={`// app/layout.jsx
import "${PACKAGE}/styles.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}`} />
                <Text>
                    Components that render links take your router's link component, so pages change without a full reload.
                    React Router's <Code>NavLink</Code> also marks the current page by itself:
                </Text>
                <CodeBlock code={`import { NavLink as RouterNavLink } from "react-router";
import { Navbar, NavLink } from "${PACKAGE}";

<Navbar>
    <NavLink as={RouterNavLink} to="/">Home</NavLink>
    <NavLink as={RouterNavLink} to="/permits">Permits</NavLink>
</Navbar>`} />
            </Section>

            <Section id="languages" title="Choose a language">
                <Text>
                    The components' own texts, like close buttons, "Loading" and address labels, come in English, Filipino and Bisaya.
                    Put <Code>LanguageProvider</Code> around your app, and set the page's <Code>lang</Code> too, so screen readers
                    pronounce it right.
                </Text>
                <CodeBlock code={`import { LanguageProvider } from "${PACKAGE}";

<LanguageProvider language="fil">   {/* "en" (the default), "fil" or "ceb" */}
    <App />
</LanguageProvider>`} />
                <Text>
                    Try it on this site: the language menu at the top switches every preview. See{" "}
                    <Link href="/foundations/languages">Languages</Link> for all the texts and how to change them.
                </Text>
            </Section>

            <Section id="whats-inside" title="What's inside">
                <Text>
                    {COMPONENTS.length} components in {COMPONENT_GROUPS.length} groups, and {BLOCKS.length} blocks for whole sections of a page.
                </Text>
                <Grid as="ul" columns={3} minColumnWidth="13rem" gap="sm">
                    {COMPONENT_GROUPS.map((group) => (
                        <Card as="li" key={group.title} hoverable padding="md" className="link-card">
                            <Link href={`/components#${group.title.toLowerCase().replace(/\s+/g, "-")}`} className="card-link">
                                {group.title}
                            </Link>
                            <Text size="sm" muted>{group.items.map((item) => item.name).join(", ")}</Text>
                        </Card>
                    ))}
                    <Card as="li" hoverable padding="md" className="link-card">
                        <Link href="/blocks" className="card-link">Blocks</Link>
                        <Text size="sm" muted>{BLOCKS.map((item) => item.name).join(", ")}</Text>
                    </Card>
                </Grid>
            </Section>

            <Section id="studio" title="UI Studio">
                <Text>
                    Try every component and block in the <Link href="/studio">UI Studio</Link>: change the props, preview it as a
                    phone, tablet or desktop, switch the theme and language, then copy the code. Every component page also has an
                    "Open in UI Studio" button.
                </Text>
                <Text>The same toolkit runs locally from the repository, for working on the kit itself:</Text>
                <CodeBlock code={`git clone ${REPOSITORY}.git\ncd bettergovui\nnpm install\nnpm run dev`} language="bash" />
            </Section>

            <Section id="help" title="Help and contributing">
                <Alert color="info" title="Native speakers wanted">
                    The Filipino and Bisaya texts were written with care, but they should be checked by native speakers before a
                    site goes live. They're all in one file, <Code>src/i18n/messages.ts</Code>.
                </Alert>
                <Text>
                    Found a bug, or need a component for a government service?{" "}
                    <Link href={`${REPOSITORY}/issues`} external>Open an issue on GitHub</Link>. Screen reader users who try the
                    components and tell us what's confusing are especially welcome.
                </Text>
            </Section>

            <OnThisPage items={TOC} />
        </Stack>
    );
}
