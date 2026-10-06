import { Badge, Group, Heading, Link, Stack, Text } from "bettergovregiondavaoui";
import { OnThisPage } from "../components/OnThisPage.jsx";
import { PageHeader } from "../components/PageHeader.jsx";
import { RichText } from "../components/RichText.jsx";
import source from "../data/changelog.md?raw";
import { NPM_URL, REPOSITORY } from "../data/registry.js";
import { useTitle } from "../lib/useTitle.js";

/**
 * src/data/changelog.md, in the same format as the library's CHANGELOG.md: an intro, then one
 * "## 0.2.0 (2026-11-02)" section per release, newest first. The date in brackets is optional.
 */
function parseChangelog(text) {
    const [intro, ...releases] = text.replace(/\r\n/g, "\n").split(/^## /m);
    return {
        intro: intro.replace(/^# .*\n/, "").trim().replace(/\s*\n\s*/g, " "),
        releases: releases.map((block) => {
            const [heading, ...body] = block.split("\n");
            const [, version, date] = heading.match(/^(\S+)(?:\s+\((\d{4}-\d{2}-\d{2})\))?/);
            return { version, date: date ?? null, body: body.join("\n").trim() };
        }),
    };
}

const { intro, releases } = parseChangelog(source);

const releaseId = (version) => `v${version.replace(/\./g, "-")}`;

function formatDate(date) {
    // Noon, so the date doesn't move a day in any time zone
    return new Date(`${date}T12:00:00`).toLocaleDateString("en-PH", { dateStyle: "long" });
}

export function Changelog() {
    useTitle("Changelog");
    return (
        <Stack gap="xl">
            <PageHeader
                eyebrow="Changelog"
                title="Changelog"
                actions={(
                    <Group gap="md">
                        <Link href={`${NPM_URL}?activeTab=versions`} external>All versions on npm</Link>
                        <Link href={`${REPOSITORY}/blob/main/CHANGELOG.md`} external>CHANGELOG.md on GitHub</Link>
                    </Group>
                )}
            >
                {intro}
            </PageHeader>

            <ol className="changelog">
                {releases.map((release, index) => {
                    const id = releaseId(release.version);
                    return (
                        <li key={release.version} className="changelog-release">
                            <section aria-labelledby={id} className="changelog-grid">
                                <Stack gap="xs" className="changelog-meta">
                                    <Group gap="sm">
                                        <Heading level={2} size={3} id={id}>{release.version}</Heading>
                                        {index === 0 && <Badge color="success" size="sm">Latest</Badge>}
                                    </Group>
                                    {release.date && (
                                        <Text size="sm" muted><time dateTime={release.date}>{formatDate(release.date)}</time></Text>
                                    )}
                                </Stack>
                                <RichText text={release.body} />
                            </section>
                        </li>
                    );
                })}
            </ol>

            <OnThisPage items={releases.map((release) => ({ id: releaseId(release.version), title: release.version, level: 2 }))} />
        </Stack>
    );
}
