// Your own sections
// Pass an element instead of props for any section, or `false` to skip it. Children go just before the call-to-action banner.
// @frame 640
import { Container, Heading, LandingPage, Stack, StatusChecker, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <LandingPage
            header={{ logo: "Davao Help Desk", links: [{ label: "Status", href: "#status" }] }}
            hero={{
                title: "Is the e-Services portal up?",
                description: "Check the status of our online services before you go to the office.",
                align: "center",
            }}
            cta={{ title: "Still need help?", primaryAction: { label: "Call (082) 123 4567", href: "tel:+63821234567" } }}
            footer={false}
        >
            <Container as="section" size="sm" id="status" aria-labelledby="status-heading" style={{ paddingBlock: "2rem" }}>
                <Stack gap="md">
                    <Heading level={2} id="status-heading">Service status</Heading>
                    <Text muted>Checked every minute.</Text>
                    <StatusChecker url="/" label="e-Services portal" />
                </Stack>
            </Container>
        </LandingPage>
    );
}
