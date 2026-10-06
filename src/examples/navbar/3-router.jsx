// With a router
// `as` takes your router's link. React Router's NavLink marks the current page by itself, so `active` isn't needed. (These links go nowhere in the preview.)
import { Navbar, NavLink } from "bettergovregiondavaoui";
import { NavLink as RouterNavLink } from "react-router";

export default function Example() {
    return (
        <Navbar aria-label="Permits">
            <NavLink as={RouterNavLink} to="/permits/new">New</NavLink>
            <NavLink as={RouterNavLink} to="/permits/renew">Renew</NavLink>
            <NavLink as={RouterNavLink} to="/permits/track">Track</NavLink>
        </Navbar>
    );
}
