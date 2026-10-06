// Basic
// Use your own links (or a router's). The last one is marked as the current page.
import { Breadcrumbs } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Breadcrumbs>
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/services/permits">Business permits</a>
            <span>Renewal</span>
        </Breadcrumbs>
    );
}
