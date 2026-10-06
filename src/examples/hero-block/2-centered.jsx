// Centered, with a header
// Without a picture the text is centered. `header` and `footer` let a hero be a whole page on its own.
// @frame 520
import { HeaderBlock, HeroBlock } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <HeroBlock
            header={<HeaderBlock logo="BetterGov Davao" links={[{ label: "Services", href: "/services" }]} action="Sign in" />}
            title="Pay your real property tax online"
            description="See your assessment, pay with GCash, Maya or a card, and get your official receipt by email."
            primaryAction={{ label: "Look up my property", href: "/rpt" }}
        />
    );
}
