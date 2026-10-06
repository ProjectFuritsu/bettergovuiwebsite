import { Input, Navbar, NavLink, Stack, Text } from "bettergovregiondavaoui";
import { Search } from "lucide-react";
import { useState } from "react";
import { NavLink as RouterNavLink } from "react-router";
import { BLOCKS, COMPONENT_GROUPS, FOUNDATIONS } from "../data/registry.js";

const SECTIONS = [
    { title: "Start here", items: [{ to: "/getting-started", title: "Getting started" }] },
    { title: "Foundations", items: FOUNDATIONS },
    { title: "Components", items: [{ to: "/components", title: "All components", end: true }] },
    ...COMPONENT_GROUPS.map((group) => ({
        title: group.title,
        indent: true,
        items: group.items.map((item) => ({ to: item.to, title: item.name })),
    })),
    {
        title: "Blocks",
        items: [{ to: "/blocks", title: "All blocks", end: true }, ...BLOCKS.map((item) => ({ to: item.to, title: item.name }))],
    },
    // On phones the header hides its links (Docs, UI Studio, Changelog), so the ☰ menu has them instead.
    { title: "More", phoneOnly: true, items: [{ to: "/studio", title: "UI Studio" }, { to: "/changelog", title: "Changelog" }] },
];

/** The sidebar: every page, with a box to filter them by name. */
export function SiteNav() {
    const [query, setQuery] = useState("");
    const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const matches = (title) => words.every((word) => title.toLowerCase().includes(word));
    const sections = SECTIONS
        .map((section) => ({ ...section, items: section.items.filter((item) => matches(item.title)) }))
        .filter((section) => section.items.length > 0);

    return (
        <Stack gap="md" className="site-nav">
            <Input
                type="search"
                size="sm"
                aria-label="Filter pages"
                placeholder="Filter pages"
                leftIcon={<Search />}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            {sections.map((section) => (
                <div key={section.title} className={section.phoneOnly ? "nav-section phone-only" : "nav-section"} data-indent={section.indent || undefined}>
                    <Text as="div" size="xs" weight="semibold" muted className="nav-heading">{section.title}</Text>
                    <Navbar>
                        {section.items.map((item) => (
                            <NavLink key={item.to} as={RouterNavLink} to={item.to} end={item.end}>{item.title}</NavLink>
                        ))}
                    </Navbar>
                </div>
            ))}
            {sections.length === 0 && <Text size="sm" muted>No pages match "{query}".</Text>}
        </Stack>
    );
}
