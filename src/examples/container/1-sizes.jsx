// Sizes
// The maximum width: `xs` 540px to `xl` 1320px (default `lg`). On smaller screens it fills the width, with space at the sides on phones.
import { Container, Stack, Text } from "bettergovregiondavaoui";

const box = { padding: "0.5rem", background: "var(--surface-muted)", borderRadius: "var(--radius)" };

export default function Example() {
    return (
        <Stack gap="sm">
            <Container size="xs" style={box}><Text size="sm">xs: 540px</Text></Container>
            <Container size="sm" style={box}><Text size="sm">sm: 720px, good for forms and articles</Text></Container>
            <Container size="md" style={box}><Text size="sm">md: 960px</Text></Container>
        </Stack>
    );
}
