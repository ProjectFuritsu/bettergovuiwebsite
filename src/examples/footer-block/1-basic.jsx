// Logo, links and copyright
// Columns of links, and Privacy and Accessibility next to the copyright.
// @frame 420
import { FooterBlock } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <FooterBlock
            logo="BetterGov Davao"
            description="Online services for the people of Davao Region."
            columns={[
                { title: "Services", links: [{ label: "Permits", href: "/permits" }, { label: "Taxes", href: "/rpt" }, { label: "Clearances", href: "/clearance" }] },
                { title: "About", links: [{ label: "Offices", href: "/offices" }, { label: "News", href: "/news" }, { label: "Careers", href: "/careers" }] },
                { title: "Help", links: [{ label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }] },
            ]}
            copyright="© 2026 BetterGov Region Davao"
            bottomLinks={[{ label: "Privacy", href: "/privacy" }, { label: "Accessibility", href: "/accessibility" }]}
        />
    );
}
