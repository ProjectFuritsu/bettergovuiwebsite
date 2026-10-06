// In a row
// A `<nav>` with a list inside. `active` marks the current page, for screen readers too. Name it with `aria-label` when a page has more than one.
import { Navbar, NavLink } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Navbar aria-label="Services">
            <NavLink href="/" active>Home</NavLink>
            <NavLink href="/permits">Permits</NavLink>
            <NavLink href="/payments">Payments</NavLink>
            <NavLink href="/contact">Contact</NavLink>
        </Navbar>
    );
}
