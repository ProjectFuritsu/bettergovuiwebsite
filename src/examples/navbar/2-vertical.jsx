// A column, with icons and counts
// `badge` shows something small after the label, like a count.
import { Navbar, NavLink } from "bettergovregiondavaoui";
import { Bell, FileText, House, Receipt } from "lucide-react";

export default function Example() {
    return (
        <Navbar orientation="vertical" aria-label="Account" style={{ maxWidth: "16rem" }}>
            <NavLink href="/" icon={<House />}>Dashboard</NavLink>
            <NavLink href="/applications" icon={<FileText />} active badge={2}>Applications</NavLink>
            <NavLink href="/payments" icon={<Receipt />}>Payments</NavLink>
            <NavLink href="/notifications" icon={<Bell />} badge={5}>Notifications</NavLink>
        </Navbar>
    );
}
