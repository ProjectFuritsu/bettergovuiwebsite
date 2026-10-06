import { useEffect } from "react";

/** Sets the browser tab's title, e.g. "Button · BetterGov UI". */
export function useTitle(title) {
    useEffect(() => {
        document.title = title ? `${title} · BetterGov UI` : "BetterGov UI";
    }, [title]);
}
