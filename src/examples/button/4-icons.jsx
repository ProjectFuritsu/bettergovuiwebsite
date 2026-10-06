// With icons
// Icons are sized to match the button. An icon-only button is square: give it an `aria-label`.
import { Button, Group } from "bettergovregiondavaoui";
import { ArrowRight, Download, Plus, Trash2 } from "lucide-react";

export default function Example() {
    return (
        <Group>
            <Button leftIcon={<Plus />}>New application</Button>
            <Button variant="outline" rightIcon={<ArrowRight />}>Next step</Button>
            <Button variant="outline" leftIcon={<Download />} aria-label="Download receipt" />
            <Button color="danger" variant="text" leftIcon={<Trash2 />} aria-label="Delete draft" />
        </Group>
    );
}
