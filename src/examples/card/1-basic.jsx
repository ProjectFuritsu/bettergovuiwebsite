// Basic
// Put CardTitle, CardDescription and CardFooter inside, or anything else.
import { Button, Card, CardDescription, CardFooter, CardTitle, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Card as="article" style={{ maxWidth: "24rem" }}>
            <CardTitle>Business permit renewal</CardTitle>
            <CardDescription>Due January 20, 2027</CardDescription>
            <Text>Renew online in about 10 minutes. You'll need last year's permit number.</Text>
            <CardFooter as="footer">
                <Button>Renew now</Button>
                <Button variant="text">Requirements</Button>
            </CardFooter>
        </Card>
    );
}
