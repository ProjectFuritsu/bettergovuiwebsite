// With a picture
// CardSection reaches the card's edges, e.g. for a picture at the top.
import { Badge, Card, CardDescription, CardSection, CardTitle } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Card style={{ maxWidth: "20rem" }}>
            <CardSection>
                <img src="/examples/city-hall.svg" alt="" style={{ display: "block", width: "100%", height: "auto" }} />
            </CardSection>
            <Badge color="info" style={{ alignSelf: "start", marginTop: "0.75rem" }}>Event</Badge>
            <CardTitle>Business One-Stop Shop opens</CardTitle>
            <CardDescription>January 2 to 31 at the City Hall lobby.</CardDescription>
        </Card>
    );
}
