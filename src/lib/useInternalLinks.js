import { useEffect } from "react";
import { useNavigate } from "react-router";

/**
 * Clicks on links to other docs pages are handled by the router instead of loading the whole site again.
 * This covers links made by the library's own components (Link, Button href, Card links…), which render plain <a>s.
 */
export function useInternalLinks() {
    const navigate = useNavigate();
    useEffect(() => {
        function onClick(event) {
            if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            const link = event.target.closest?.("a[href]");
            if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;
            const url = new URL(link.href);
            const base = import.meta.env.BASE_URL;
            if (url.origin !== location.origin || !url.pathname.startsWith(base) || url.pathname.startsWith(`${base}frame/`)) return;
            if (url.pathname === location.pathname && url.hash) return; // same page: let the browser jump
            event.preventDefault();
            navigate(`/${url.pathname.slice(base.length)}${url.search}${url.hash}`);
        }
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, [navigate]);
}
