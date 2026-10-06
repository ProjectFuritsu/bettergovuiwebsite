# BetterGov UI website

[![CI](https://github.com/ProjectFuritsu/bettergovuiwebsite/actions/workflows/ci.yml/badge.svg)](https://github.com/ProjectFuritsu/bettergovuiwebsite/actions/workflows/ci.yml)
[![Deploy](https://github.com/ProjectFuritsu/bettergovuiwebsite/actions/workflows/deploy.yml/badge.svg)](https://github.com/ProjectFuritsu/bettergovuiwebsite/actions/workflows/deploy.yml)

**Live site: https://projectfuritsu.github.io/bettergovuiwebsite/**

The documentation site for [BetterGov UI](https://github.com/ProjectFuritsu/bettergovui)
([`bettergovregiondavaoui`](https://www.npmjs.com/package/bettergovregiondavaoui) on npm). It's built with the library
itself: the layout is its `Scaffold`, the tables are its `Table`, the code blocks are its `Code`.

## Run it

```bash
npm install
npm run dev
```

`npm run build` makes a static site in `dist/`, and `npm run preview` serves that build locally.

## What's where

| Path | What it is |
|---|---|
| `src/data/registry.js` | Every documented component and block, in sidebar order: which exports, helper functions and object shapes each page shows |
| `src/examples/<slug>/` | The examples on each page (see below) |
| `src/pages/landing/` | The home page (`/`): hero, the tabbed showcase of live components, features and install |
| `src/pages/` | Getting started (`/getting-started`), the Foundations pages, the component page template and the index pages |
| `src/components/` | The docs' own building blocks: example boxes, code blocks, props tables, "On this page" |
| `src/layout/` | The header, sidebar and footer |
| `scripts/extract-api.mjs` | Writes `src/generated/api.json` from the library's type definitions |
| `public/examples/` | Pictures used in the examples |

## UI Studio

`/studio` is an editor for every component and block: pick one, change its props in the properties pane, preview it
at phone, tablet or desktop size, and copy the generated code. It's the toolkit from the library repository
(`playground/`), brought over to `src/studio/`:

| Path | What it is |
|---|---|
| `src/studio/entries/` | One file per component: its controls, how it renders them, and the code it generates |
| `src/studio/workbench/` | The properties pane, device preview and code panel |
| `src/studio/StudioPage.tsx` | The page at `/studio/<component>`, with the site header on top |
| `src/studio/StudioFrame.tsx` | What runs inside the preview frame (`/studio-frame`), so media queries see the device's width |
| `src/studio/studio.css` | The toolkit's styles, scoped to the studio so they don't affect the docs |

It stays in TypeScript, like in the repository, so updates to the toolkit can be copied over. When you do, change the
imports from `../../src` to `bettergovregiondavaoui`, and check them against the published version:

```bash
npm run typecheck
```

The studio loads only when it's opened, so the docs pages don't download it.

## Props tables update themselves

Before every `npm run dev` and `npm run build`, `scripts/extract-api.mjs` reads the installed library's TypeScript
definitions and writes every component's props, types, defaults and descriptions to `src/generated/api.json`. The
descriptions are the library's own doc comments, so to fix a description, fix it in the library.

After a new release, update the library and the tables follow:

```bash
npm install bettergovregiondavaoui@latest
```

## Changelog

`/changelog` shows `src/data/changelog.md`, which uses the same format as the library's `CHANGELOG.md`. After a
release, copy the new section from the library to the top of the list, and add the release date in brackets:

```md
## 0.2.0 (2026-11-02)

- What changed…
```

## Adding an example

Add a file to `src/examples/<slug>/`, where `<slug>` is the page's address (`button`, `date-input`, `hero-block`…).
The number at the start of the file name sets the order. The file starts with comments, then is a normal component:

```jsx
// Loading
// Blocks clicks and shows an animation while something saves.
import { Button } from "bettergovregiondavaoui";

export default function Example() {
    return <Button loading>Save changes</Button>;
}
```

- The first comment line is the title, the next ones the description (`code` in backticks works).
- The page shows the running component and, under it, the file's code without those comments, so the code people
  copy is exactly the code that runs.
- Add `// @frame 560` to show it in a frame 560px tall, with phone, tablet and desktop widths. Use it for whole pages
  (`Scaffold`, blocks), which react to the size of the screen rather than the box around them.

## Adding a component

When the library gets a new component, add it to its group in `src/data/registry.js`, then add examples. The page,
the sidebar link and the props table come from that.

## Checks and deploys

GitHub Actions runs two workflows (in `.github/workflows/`):

- **CI** (`ci.yml`), on every push and pull request: lint, type check and build. Run the same checks locally with
  `npm run lint`, `npm run typecheck` and `npm run build`.
- **Deploy to GitHub Pages** (`deploy.yml`), on every push to `main`: builds the site and publishes it. It needs
  Pages turned on once: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Dependabot (`.github/dependabot.yml`) opens pull requests once a month to update the dependencies and the actions,
with the component library in a pull request of its own.

### The site's folder

On GitHub Pages the site lives in a folder, `/bettergovuiwebsite/`. The deploy workflow passes that to the build as
`BASE_PATH`, and with a custom domain it becomes `/` by itself. So that links work in both cases:

- Router links (`<RouterLink to="/components">`, `NavLink as={RouterNavLink}`) work as they are.
- Plain links to the site's own pages (`<Link href>`, `<Button href>`) go through `sitePath("/components")` from
  `src/lib/paths.js`.
- Pictures in examples are imported (`import cityHall from "../images/city-hall.svg"`), not put in `public/`.

To try a build in a folder locally:

```bash
BASE_PATH=/bettergovuiwebsite/ npm run build
npx vite preview --base /bettergovuiwebsite/
```

(In Git Bash on Windows, start the first line with `MSYS_NO_PATHCONV=1` so the path isn't turned into a Windows one.)

### Other hosts

It's a static site, so it works on any host. Pages have clean addresses (`/components/button`), so the host must send
every address to `index.html`:

- **Netlify** and **Cloudflare Pages**: `public/_redirects` already does this.
- **Vercel**: `vercel.json` already does this.
- **GitHub Pages**: the deploy workflow copies `index.html` to `404.html`, which Pages shows for any other address.
