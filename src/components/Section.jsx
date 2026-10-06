import { Heading, Stack } from "bettergovregiondavaoui";

/** A titled part of a guide page: a <section> named by its heading, which also gets an id to link to. */
export function Section({ id, title, level = 2, children }) {
    return (
        <Stack gap="md" as="section" aria-labelledby={id}>
            <Heading level={level} id={id}>{title}</Heading>
            {children}
        </Stack>
    );
}
