// Size and spacing
import { Grid, List, ListItem } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Grid columns={2} minColumnWidth="14rem">
            <List size="sm" spacing="xs">
                <ListItem>Small text</ListItem>
                <ListItem>Close together</ListItem>
                <ListItem>For side notes</ListItem>
            </List>
            <List size="lg" spacing="md" color="primary">
                <ListItem>Large text</ListItem>
                <ListItem>More space</ListItem>
                <ListItem>Primary bullets</ListItem>
            </List>
        </Grid>
    );
}
