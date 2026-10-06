// Call to action
// A tinted banner that asks people to take the next step, usually near the end of a page.
// @frame 300
import { CtaBlock } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <CtaBlock
            title="Ready to apply?"
            description="It takes about 10 minutes. Have a valid ID ready."
            primaryAction={{ label: "Start your application", href: "/apply" }}
            secondaryAction={{ label: "See requirements", href: "/requirements" }}
        />
    );
}
