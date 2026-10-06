// Separated, several open
// `variant="separated"` makes each item its own box; `multiple` lets several be open at once.
import { Accordion, AccordionItem, List, ListItem } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Accordion variant="separated" multiple>
            <AccordionItem title="Business permit" defaultOpen>
                <List>
                    <ListItem>DTI or SEC registration</ListItem>
                    <ListItem>Barangay business clearance</ListItem>
                </List>
            </AccordionItem>
            <AccordionItem title="Building permit" defaultOpen>
                <List>
                    <ListItem>Building plans signed by an engineer</ListItem>
                    <ListItem>Proof of land ownership</ListItem>
                </List>
            </AccordionItem>
        </Accordion>
    );
}
