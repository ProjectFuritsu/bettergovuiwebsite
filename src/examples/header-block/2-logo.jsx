// Your own logo and button
// `logo` takes an element, e.g. an image with alt text. `action` can be your own Button.
// @frame 340
import { Button, HeaderBlock } from "bettergovregiondavaoui";
import { LogIn } from "lucide-react";
import logo from "../images/logo.svg";

export default function Example() {
    return (
        <HeaderBlock
            logo={(
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontWeight: 700 }}>
                    <img src={logo} alt="" width={28} height={28} />
                    City of Davao e-Services
                </span>
            )}
            links={[
                { label: "Permits", href: "/permits" },
                { label: "Taxes", href: "/taxes" },
            ]}
            action={<Button variant="outline" leftIcon={<LogIn />} href="/sign-in">Sign in</Button>}
        />
    );
}
