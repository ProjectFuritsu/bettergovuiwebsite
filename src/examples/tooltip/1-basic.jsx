// Basic
// Shows on hover and on keyboard focus; Escape hides it. Screen readers read it as the element's description.
import { Button, Group, Tooltip } from "bettergovregiondavaoui";
import { Download, Printer } from "lucide-react";

export default function Example() {
    return (
        <Group>
            <Tooltip label="Download as PDF">
                <Button variant="outline" leftIcon={<Download />} aria-label="Download" />
            </Tooltip>
            <Tooltip label="Print your receipt">
                <Button variant="outline" leftIcon={<Printer />} aria-label="Print" />
            </Tooltip>
        </Group>
    );
}
