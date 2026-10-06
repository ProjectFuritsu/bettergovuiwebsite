// Only the parts you need
// A header, the main content and a footer: no navbar, no aside.
// @frame 380
import { Container, Heading, Scaffold, ScaffoldFooter, ScaffoldHeader, ScaffoldMain, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Scaffold>
            <ScaffoldHeader>
                <strong>Business Permits Office</strong>
            </ScaffoldHeader>
            <ScaffoldMain padding="xl">
                <Container size="sm">
                    <Heading level={1}>Track your application</Heading>
                    <Text muted>Enter your reference number to see where your application is.</Text>
                </Container>
            </ScaffoldMain>
            <ScaffoldFooter>
                <Text size="sm" muted>© 2026 BetterGov Region Davao</Text>
            </ScaffoldFooter>
        </Scaffold>
    );
}
