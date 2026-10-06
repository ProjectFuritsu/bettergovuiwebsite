// The examples on each component page. Each one is a file in src/examples/<slug>/, e.g.
// src/examples/button/1-variants.jsx: the number sets the order, and the file starts with comments:
//
//     // Variants                              ← the title
//     // `filled` is the default. …            ← the description (any number of lines)
//     // @frame 560                            ← optional: show it in a resizable frame this tall (whole pages)
//
// The page shows the running component and, under it, the file's own code (without those comments),
// so the code people copy is exactly the code that runs.
//
// The code (text) is bundled with the site, for the titles and the table of contents; the components themselves
// load only when their page is opened, so the site stays light.

import { lazy } from "react";

const modules = import.meta.glob("../examples/*/*.jsx", { import: "default" });
const sources = import.meta.glob("../examples/*/*.jsx", { eager: true, query: "?raw", import: "default" });

function parse(path) {
    const [, slug, order, id] = path.match(/examples\/([^/]+)\/(\d+)-([^/]+)\.jsx$/);
    const lines = sources[path].replace(/\r\n/g, "\n").split("\n");
    const header = [];
    while (lines.length && lines[0].startsWith("//")) header.push(lines.shift().replace(/^\/\/ ?/, ""));
    const frame = header.find((line) => line.startsWith("@frame"));
    const text = header.filter((line) => !line.startsWith("@"));
    return {
        slug,
        id,
        order: Number(order),
        title: text[0] ?? id,
        description: text.slice(1).join(" ").trim(),
        frameHeight: frame ? Number(frame.split(/\s+/)[1]) || 600 : null,
        code: lines.join("\n").trim() + "\n",
        Component: lazy(() => modules[path]().then((Component) => ({ default: Component }))),
    };
}

const bySlug = new Map();
for (const example of Object.keys(modules).map(parse)) {
    if (!bySlug.has(example.slug)) bySlug.set(example.slug, []);
    bySlug.get(example.slug).push(example);
}
for (const list of bySlug.values()) list.sort((a, b) => a.order - b.order);

export function examplesFor(slug) {
    return bySlug.get(slug) ?? [];
}

export function findExample(slug, id) {
    return examplesFor(slug).find((example) => example.id === id);
}
