// Variants
// `outline` (default), `elevated` and `filled`.
import { Card, CardDescription, CardTitle, Grid } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Grid minColumnWidth="12rem">
            <Card><CardTitle>Outline</CardTitle><CardDescription>A thin border</CardDescription></Card>
            <Card variant="elevated"><CardTitle>Elevated</CardTitle><CardDescription>A shadow</CardDescription></Card>
            <Card variant="filled"><CardTitle>Filled</CardTitle><CardDescription>A soft background</CardDescription></Card>
        </Grid>
    );
}
