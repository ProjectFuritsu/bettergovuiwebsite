// With your own button
// Any action can be your own element.
// @frame 300
import { Button, CtaBlock } from "bettergovregiondavaoui";
import { Phone } from "lucide-react";

export default function Example() {
    return (
        <CtaBlock
            title="Need help with your application?"
            primaryAction={<Button leftIcon={<Phone />} href="tel:+63821234567">Call (082) 123 4567</Button>}
        />
    );
}
