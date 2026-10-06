// Just the copyright
// @frame 200
import { FooterBlock } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <FooterBlock
            copyright="© 2026 BetterGov Region Davao"
            bottomLinks={[{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }]}
        />
    );
}
