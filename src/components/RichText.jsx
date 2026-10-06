import { List, ListItem, Stack, Text } from "bettergovregiondavaoui";
import { Fragment } from "react";
import { inline } from "../lib/inline.jsx";

/**
 * The library's doc comments as page content: paragraphs (split at blank lines), "- " lines as bullet lists,
 * and inline `code`. The same format is used in the examples' descriptions.
 */
export function RichText({ text, size = "md", muted = false }) {
    if (!text) return null;
    const blocks = text.trim().split(/\n\s*\n/);
    return (
        <Stack gap="xs">
            {blocks.map((block, index) => {
                const intro = [];
                const bullets = [];
                for (const line of block.split("\n")) {
                    if (/^\s*- /.test(line)) bullets.push(line.replace(/^\s*- /, ""));
                    else if (bullets.length) bullets[bullets.length - 1] += ` ${line.trim()}`;
                    else intro.push(line.trim());
                }
                return (
                    <Fragment key={index}>
                        {intro.length > 0 && <Text size={size} muted={muted}>{inline(intro.join(" "))}</Text>}
                        {bullets.length > 0 && (
                            <List size={size} spacing="xs">
                                {bullets.map((bullet, bulletIndex) => <ListItem key={bulletIndex}>{inline(bullet)}</ListItem>)}
                            </List>
                        )}
                    </Fragment>
                );
            })}
        </Stack>
    );
}
