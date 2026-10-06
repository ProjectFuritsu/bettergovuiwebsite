// As a page region
// `as` makes it the right HTML element, e.g. `"main"` for the page's main content, or `"section"` for a part of it.
import { Container, Heading, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Container as="section" size="sm" aria-labelledby="hours-heading">
            <Heading level={2} id="hours-heading">Office hours</Heading>
            <Text>Monday to Friday, 8:00 AM to 5:00 PM. Closed on holidays.</Text>
        </Container>
    );
}
