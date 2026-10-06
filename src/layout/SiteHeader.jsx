import { Badge, Button, Group, Navbar, NavLink, Select, Tooltip } from "bettergovregiondavaoui";
import { Moon, Sun } from "lucide-react";
import { Link as RouterLink, useLocation } from "react-router";
import { REPOSITORY, VERSION } from "../data/registry.js";
import { LANGUAGES, useSettings } from "../lib/settings.js";
import { Logo } from "./Logo.jsx";

/** Everything in the docs sidebar: getting started, foundations, components and blocks. */
const DOCS_PATHS = ["/getting-started", "/foundations", "/components", "/blocks"];

/** The parts of the site, and which addresses belong to each. */
const SECTIONS = [
    { to: "/getting-started", label: "Docs", match: (path) => DOCS_PATHS.some((docsPath) => path.startsWith(docsPath)) },
    { to: "/studio", label: "UI Studio", match: (path) => path.startsWith("/studio") },
    { to: "/changelog", label: "Changelog", match: (path) => path.startsWith("/changelog") },
];

export function ThemeToggle() {
    const { theme, setTheme } = useSettings();
    const next = theme === "dark" ? "light" : "dark";
    const label = `Switch to ${next} mode`;
    return (
        <Tooltip label={label} placement="bottom">
            <Button
                variant="text"
                color="secondary"
                aria-label={label}
                leftIcon={theme === "dark" ? <Sun /> : <Moon />}
                onClick={() => setTheme(next)}
            />
        </Tooltip>
    );
}

export function LanguageSwitch() {
    const { language, setLanguage } = useSettings();
    return (
        <Tooltip label="Language of the components' own texts in the previews" placement="bottom">
            <Select
                size="sm"
                aria-label="Preview language"
                className="language-switch"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                options={LANGUAGES.map((option) => ({ value: option.value, label: option.label }))}
            />
        </Tooltip>
    );
}

/**
 * What's in the header on every page: the logo, the parts of the site, the preview language, the theme and GitHub.
 * The docs put it in a ScaffoldHeader; the home page and the studio in a plain <header>.
 */
export function SiteHeaderContent() {
    const { pathname } = useLocation();
    return (
        <>
            <RouterLink to="/" className="site-logo" aria-label="BetterGov UI, home">
                <Logo />
                <span>BetterGov UI</span>
            </RouterLink>
            <Badge variant="light" size="sm" className="site-version">v{VERSION}</Badge>
            {/* The part you're in, not the page itself, so aria-current="true" rather than "page" */}
            <Navbar aria-label="Site" className="site-sections">
                {SECTIONS.map((section) => (
                    <NavLink key={section.to} as={RouterLink} to={section.to} aria-current={section.match(pathname) ? "true" : undefined}>
                        {section.label}
                    </NavLink>
                ))}
            </Navbar>
            <Group gap="xs" className="site-header-end" wrap={false}>
                <LanguageSwitch />
                <ThemeToggle />
                <Button variant="text" color="secondary" href={REPOSITORY} target="_blank" className="hide-below-desktop">GitHub</Button>
            </Group>
        </>
    );
}
