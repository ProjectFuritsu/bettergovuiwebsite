import { Heading, Stack, Text } from "bettergovregiondavaoui";

/** The top of every page: a small line above the title, the title (the page's only h1), and a lead paragraph. */
export function PageHeader({ eyebrow, title, children, actions }) {
    return (
        <Stack gap="sm" className="page-header">
            {eyebrow && <Text size="sm" weight="semibold" color="primary">{eyebrow}</Text>}
            <Heading level={1}>{title}</Heading>
            {children && <Text size="lg" muted className="lead">{children}</Text>}
            {actions}
        </Stack>
    );
}
