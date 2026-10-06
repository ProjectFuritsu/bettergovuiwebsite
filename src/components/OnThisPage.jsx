import { Text } from "bettergovregiondavaoui";
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TocSlotContext } from "../lib/toc.js";

/**
 * The page's sections, listed in the aside beside the content, with the one being read highlighted.
 * `items`: { id, title, level } for each heading, in page order.
 */
export function OnThisPage({ items }) {
    const slot = useContext(TocSlotContext);
    const [active, setActive] = useState(null);
    const ids = items.map((item) => item.id).join(" ");

    useEffect(() => {
        const headings = ids.split(" ").map((id) => document.getElementById(id)).filter(Boolean);
        if (!headings.length) return;
        const visible = new Set();
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) visible.add(entry.target.id);
                else visible.delete(entry.target.id);
            }
            const first = headings.find((heading) => visible.has(heading.id));
            if (first) setActive(first.id);
        }, { rootMargin: "-64px 0px -55% 0px" });
        headings.forEach((heading) => observer.observe(heading));
        return () => observer.disconnect();
    }, [ids]);

    if (!slot || items.length < 2) return null;
    return createPortal(
        <nav aria-labelledby="on-this-page" className="toc">
            <Text as="div" id="on-this-page" size="xs" weight="semibold" muted className="toc-title">On this page</Text>
            <ul>
                {items.map((item) => (
                    <li key={item.id} data-level={item.level}>
                        <a href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>,
        slot,
    );
}
