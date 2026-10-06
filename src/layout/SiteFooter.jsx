import { Group, Link, Text } from "bettergovregiondavaoui";
import { NPM_URL, REPOSITORY, VERSION } from "../data/registry.js";
import { sitePath } from "../lib/paths.js";

/**
 * The line at the bottom of the docs and the changelog. It repeats the header's links, since on phones the header
 * hides them and pages without the docs sidebar have no ☰ menu.
 */
export function SiteFooterContent() {
    return (
        <Group justify="space-between" gap="md">
            <Text size="sm" muted>
                BetterGov UI v{VERSION}. Dedicated to the public domain under CC0 1.0. This site is built with it.
            </Text>
            <Group gap="md" as="nav" aria-label="Project">
                <Link href={sitePath("/getting-started")}>Docs</Link>
                <Link href={sitePath("/studio")}>UI Studio</Link>
                <Link href={sitePath("/changelog")}>Changelog</Link>
                <Link href={REPOSITORY} external>GitHub</Link>
                <Link href={NPM_URL} external>npm</Link>
            </Group>
        </Group>
    );
}
