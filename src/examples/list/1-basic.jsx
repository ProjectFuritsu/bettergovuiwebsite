// Bulleted and numbered
// Numbered lists for steps people follow in order.
import { Grid, List, ListItem } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Grid columns={2} minColumnWidth="14rem">
            <List>
                <ListItem>Valid government ID</ListItem>
                <ListItem>Barangay clearance</ListItem>
                <ListItem>Proof of address</ListItem>
            </List>
            <List type="ordered">
                <ListItem>Fill in the form</ListItem>
                <ListItem>Pay the fee</ListItem>
                <ListItem>Pick up your permit</ListItem>
            </List>
        </Grid>
    );
}
