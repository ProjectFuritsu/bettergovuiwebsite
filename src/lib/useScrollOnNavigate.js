import { useEffect } from "react";
import { useLocation } from "react-router";

/** A new page starts at the top, or at the section in the address (#props). */
export function useScrollOnNavigate() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) target.scrollIntoView();
        else window.scrollTo(0, 0);
    }, [pathname, hash]);
}
