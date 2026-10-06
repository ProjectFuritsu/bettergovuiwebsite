import { Button, Tooltip } from "bettergovregiondavaoui";
import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { copyText } from "../../lib/clipboard.js";

const LABELS = { idle: "Copy", copied: "Copied", failed: "Copy failed" };

/**
 * The install command in the hero: one line with a small copy button, so it fits a phone screen
 * (the Code component's "Copy" label takes too much room there).
 */
export function InstallCommand({ command }) {
    const [state, setState] = useState("idle");
    const timer = useRef(undefined);
    useEffect(() => () => clearTimeout(timer.current), []);

    async function copy() {
        try {
            await copyText(command);
            setState("copied");
        } catch {
            setState("failed");
        }
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setState("idle"), 2000);
    }

    return (
        <div className="landing-install">
            <code>{command}</code>
            <Tooltip label={LABELS[state]}>
                <Button
                    variant="text"
                    size="sm"
                    color="var(--text)"
                    leftIcon={state === "copied" ? <Check /> : <Copy />}
                    aria-label="Copy the install command"
                    onClick={copy}
                />
            </Tooltip>
            {/* Tells screen reader users how it went, without moving focus */}
            <span role="status" className="visually-hidden">{state === "idle" ? "" : LABELS[state]}</span>
        </div>
    );
}
