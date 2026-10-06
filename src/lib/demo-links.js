import { toast } from "bettergovregiondavaoui";

/**
 * Links in examples point at made-up pages like /apply. This keeps a click on one from leaving the docs
 * (or loading the docs inside a preview frame). Links to a spot on the same page (#main) still work.
 */
export function stopDemoLinks(event) {
    const link = event.target.closest?.("a[href]");
    if (!link || link.getAttribute("href").startsWith("#")) return;
    event.preventDefault();
    toast({ id: "demo-link", description: "Links in examples don't go anywhere.", duration: 2500 });
}
