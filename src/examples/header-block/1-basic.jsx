// Logo, links and a button
// On phones the links fold into a ☰ menu: try the phone size and open it.
// @frame 340
import { HeaderBlock } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <HeaderBlock
            logo="BetterGov Davao"
            links={[
                { label: "Services", href: "/services", active: true },
                { label: "Offices", href: "/offices" },
                { label: "News", href: "/news" },
                { label: "Contact", href: "/contact" },
            ]}
            action={{ label: "Sign in", href: "/sign-in" }}
        />
    );
}
