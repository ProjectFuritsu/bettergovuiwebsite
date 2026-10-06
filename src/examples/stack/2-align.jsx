// Alignment
// Items stretch to the full width by default. `align` places them at the start, center or end instead.
import { Button, Grid, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Grid columns={3} minColumnWidth="9rem">
            <Stack gap="xs" align="start"><Button size="sm">Start</Button><Button size="sm" variant="outline">Longer button</Button></Stack>
            <Stack gap="xs" align="center"><Button size="sm">Center</Button><Button size="sm" variant="outline">Longer button</Button></Stack>
            <Stack gap="xs"><Button size="sm">Stretch</Button><Button size="sm" variant="outline">Longer button</Button></Stack>
        </Grid>
    );
}
