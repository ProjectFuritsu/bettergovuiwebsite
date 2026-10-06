// As a list of cards
// `as="ul"` with `Card as="li"`, so screen readers say how many there are.
import { Card, CardTitle, Grid, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Grid as="ul" minColumnWidth="12rem">
            <Card as="li"><CardTitle>12,480</CardTitle><Text muted size="sm">Permits issued this year</Text></Card>
            <Card as="li"><CardTitle>3 days</CardTitle><Text muted size="sm">Average processing time</Text></Card>
            <Card as="li"><CardTitle>98%</CardTitle><Text muted size="sm">Applied online</Text></Card>
        </Grid>
    );
}
