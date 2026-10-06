import {LanguageProvider} from "bettergovregiondavaoui";
import {useEffect, useLayoutEffect, useState, type MouseEvent} from "react";
import {entries} from "./entries";
import "./studio.css";
import {cx} from "./utils/cx";
import type {FrameMessage, Language, Theme} from "./workbench/devices";
import type {Controls, ValuesOf} from "./workbench/types";

interface FrameState {
    entryName: string;
    values: ValuesOf<Controls>;
    theme: Theme;
    language: Language;
}

// Links in the demos point at made-up pages (/permits); following one would load the docs inside the frame
function stayOnThePreview(event: MouseEvent) {
    const link = (event.target as HTMLElement).closest("a[href]");
    if (link && !link.getAttribute("href")!.startsWith("#")) event.preventDefault();
}

// Runs inside the device preview iframe (/studio-frame). Its own viewport is the device's size,
// so media queries respond to the phone/tablet/desktop width, just like on a real device.
export default function StudioFrame() {
    const [state, setState] = useState<FrameState | null>(null);

    useEffect(() => {
        function onMessage(event: MessageEvent<FrameMessage>) {
            // Only accept messages from the workbench page that contains this frame
            if (event.origin !== location.origin || event.source !== window.parent) return;
            if (event.data?.type === "render") {
                const {entryName, values, theme, language} = event.data;
                setState({entryName, values, theme, language});
            }
        }

        window.addEventListener("message", onMessage);
        // Ask the workbench for the current component, values and theme
        const ready: FrameMessage = {type: "frame-ready"};
        window.parent.postMessage(ready, location.origin);
        return () => window.removeEventListener("message", onMessage);
    }, []);

    const theme = state?.theme;
    const language = state?.language;

    // Same light/dark theme as the workbench, applied before the browser paints
    useLayoutEffect(() => {
        if (theme) document.documentElement.dataset.theme = theme;
    }, [theme]);

    // The page's language, so screen readers pronounce the texts correctly
    useLayoutEffect(() => {
        if (language) document.documentElement.lang = language;
    }, [language]);

    const entry = state && entries.find(item => item.name === state.entryName);
    if (!state || !entry) return null;

    return (
        <div className="studio-frame" onClickCapture={stayOnThePreview}>
            <div className={cx("frame", `frame--${entry.layout}`)}>
                <LanguageProvider language={state.language}>
                    <div className="frame-stage">{entry.render(state.values)}</div>
                </LanguageProvider>
            </div>
        </div>
    );
}
