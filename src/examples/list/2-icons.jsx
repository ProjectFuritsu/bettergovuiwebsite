// With icons
// One icon for the whole list, or one per item. `color` colors the icons; the text keeps its color.
import { List, ListItem } from "bettergovregiondavaoui";
import { Check, X } from "lucide-react";

export default function Example() {
    return (
        <List icon={<Check />} color="success" spacing="sm">
            <ListItem>Barangay clearance</ListItem>
            <ListItem>Community tax certificate (cedula)</ListItem>
            <ListItem icon={<X color="var(--danger)" />}>Fire safety inspection certificate</ListItem>
        </List>
    );
}
