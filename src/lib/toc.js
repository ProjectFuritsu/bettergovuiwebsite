import { createContext } from "react";

// "On this page": each page lists its own sections with <OnThisPage items={…} />, which renders into
// the layout's aside through this slot (the aside sits outside <main>, beside it).
export const TocSlotContext = createContext(null);

export const anchorFor = (name) => `api-${name.toLowerCase()}`;
export const exampleAnchor = (id) => `example-${id}`;

/** The headings an ApiReference adds to the page. */
export function apiHeadings(entry) {
    return [
        ...entry.exports.map((name) => ({ id: anchorFor(name), title: name, level: 3 })),
        ...entry.functions.map((name) => ({ id: anchorFor(name), title: `${name}()`, level: 3 })),
        ...entry.shapes.map((name) => ({ id: anchorFor(name), title: name, level: 3 })),
    ];
}
