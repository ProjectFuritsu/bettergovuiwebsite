// Basic
// Opening one closes the others. Built on the browser's `<details>`, so Ctrl+F opens the item that has the match.
import { Accordion, AccordionItem, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Accordion>
            <AccordionItem title="What do I need to apply?" defaultOpen>
                <Text>A valid ID, your barangay clearance, and proof of your business address.</Text>
            </AccordionItem>
            <AccordionItem title="How long does it take?">
                <Text>Usually 3 working days after you pay.</Text>
            </AccordionItem>
            <AccordionItem title="Can someone pick it up for me?">
                <Text>Yes, with an authorization letter and a copy of your ID.</Text>
            </AccordionItem>
        </Accordion>
    );
}
