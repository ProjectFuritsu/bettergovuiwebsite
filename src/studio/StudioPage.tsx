import {Button} from "bettergovregiondavaoui";
import {BookOpen, PanelRightClose, PanelRightOpen, RotateCw, Search} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {slugify} from "../data/registry.js";
import {SiteHeaderContent} from "../layout/SiteHeader.jsx";
import {useSettings} from "../lib/settings.js";
import {sitePath} from "../lib/paths.js";
import {useInternalLinks} from "../lib/useInternalLinks.js";
import {useTitle} from "../lib/useTitle.js";
import {entries} from "./entries";
import "./studio.css";
import {cx} from "./utils/cx";
import {CodePanel} from "./workbench/CodePanel";
import {DevicePreview} from "./workbench/DevicePreview";
import {DEVICES, type DeviceName} from "./workbench/devices";
import {PropControl} from "./workbench/PropControl";
import {CATEGORIES, defaultValues} from "./workbench/types";

// The workbench from the library repo's toolkit (playground/App.tsx), inside the website: the site header gives
// it the theme and the preview language, and the selected component is in the address (/studio/date-input).

const PROPS_HIDDEN_KEY = "playground-props-hidden";

// Whether the properties pane was hidden last time
function initialPropsHidden() {
    try {
        return localStorage.getItem(PROPS_HIDDEN_KEY) === "true";
    } catch {
        return false;
    }
}

/** Where a component's docs page is, e.g. /components/date-input or /blocks/hero-block */
function docsPath(name: string, category: string) {
    return sitePath(`/${category === "Blocks" ? "blocks" : "components"}/${slugify(name)}`);
}

export default function StudioPage() {
    useInternalLinks();
    const {theme, language} = useSettings();
    const {slug} = useParams();
    const navigate = useNavigate();
    const entry = entries.find(item => slugify(item.name) === slug) ?? entries[0];
    useTitle(`${entry.name} · UI Studio`);

    // Each component keeps its own edited values, so switching between them doesn't lose changes
    const [valuesByName, setValuesByName] = useState(() =>
        Object.fromEntries(entries.map(item => [item.name, defaultValues(item.controls)])),
    );
    const [device, setDevice] = useState<DeviceName>("responsive");
    const [landscape, setLandscape] = useState(false);
    const [propsHidden, setPropsHidden] = useState(initialPropsHidden);

    useEffect(() => {
        try {
            localStorage.setItem(PROPS_HIDDEN_KEY, String(propsHidden));
        } catch {
            // Not saved; it still works for this visit
        }
    }, [propsHidden]);
    const canRotate = DEVICES[device].rotatable;

    const values = valuesByName[entry.name];
    const code = entry.code(values);

    // Switching components replaces the address instead of adding to the history, so Back leaves the studio
    function selectEntry(name: string) {
        navigate(`/studio/${slugify(name)}`, {replace: true});
    }

    function setValue(key: string, value: string | number | boolean) {
        setValuesByName(previous => ({...previous, [entry.name]: {...previous[entry.name], [key]: value}}));
    }

    // Sidebar search: matches component names and group names ("forms" shows all form controls)
    const [query, setQuery] = useState("");
    const searchRef = useRef<HTMLInputElement>(null);
    const search = query.trim().toLowerCase();
    const matches = entries.filter(item => `${item.name} ${item.category}`.toLowerCase().includes(search));
    // What Enter opens: a name that starts with the text, then one that contains it, then a group match
    const rank = (name: string) => (name.toLowerCase().startsWith(search) ? 0 : name.toLowerCase().includes(search) ? 1 : 2);
    const bestMatch = [...matches].sort((a, b) => rank(a.name) - rank(b.name))[0];

    // Press "/" anywhere (except while typing in a field) to jump to the search box
    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key !== "/" || event.ctrlKey || event.metaKey || event.altKey) return;
            if ((event.target as HTMLElement).closest("input, textarea, select, [contenteditable]")) return;
            event.preventDefault();
            searchRef.current?.focus();
        }
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    function reset() {
        setValuesByName(previous => ({...previous, [entry.name]: defaultValues(entry.controls)}));
    }

    return (
        <div className="studio-layout">
            <a href="#studio-canvas" className="skip-link">Skip to the preview</a>
            <header className="site-header site-header-standalone">
                <SiteHeaderContent />
            </header>

            <div className="studio">
                <div className={cx("workbench", propsHidden && "workbench--props-hidden")}>
                    <aside className="sidebar">
                        <div className="sidebar-search">
                            <Search className="sidebar-search-icon" aria-hidden="true" />
                            <input
                                ref={searchRef}
                                type="search"
                                className="sidebar-search-input"
                                placeholder="Search"
                                aria-label="Search components"
                                aria-keyshortcuts="/"
                                value={query}
                                onChange={event => setQuery(event.target.value)}
                                onKeyDown={event => {
                                    // Enter opens the first match; Escape clears the search
                                    if (event.key === "Enter" && search && bestMatch) selectEntry(bestMatch.name);
                                    if (event.key === "Escape") setQuery("");
                                }}
                            />
                            {!query && <kbd className="sidebar-search-key" aria-hidden="true">/</kbd>}
                        </div>
                        <nav className="nav" aria-label="Components">
                            {matches.length === 0 && (
                                <p className="sidebar-empty" role="status">No components match “{query.trim()}”.</p>
                            )}
                            {CATEGORIES.map(category => {
                                const items = matches.filter(item => item.category === category);
                                if (items.length === 0) return null;
                                return (
                                    <div key={category} className="nav-group">
                                        <p className="sidebar-heading">{category}</p>
                                        {items.map(item => (
                                            <button
                                                key={item.name}
                                                type="button"
                                                className={cx("nav-item", item.name === entry.name && "is-active")}
                                                aria-current={item.name === entry.name ? "page" : undefined}
                                                onClick={() => selectEntry(item.name)}>
                                                {item.name}
                                            </button>
                                        ))}
                                    </div>
                                );
                            })}
                        </nav>
                    </aside>

                    <main id="studio-canvas" className="canvas" tabIndex={-1}>
                        <header className="canvas-toolbar">
                            <div>
                                <h1>{entry.name}</h1>
                                <p>{entry.description}</p>
                            </div>
                            <div className="toolbar-actions">
                                <Button
                                    size="sm"
                                    variant="text"
                                    color="var(--pg-muted)"
                                    leftIcon={<BookOpen />}
                                    href={docsPath(entry.name, entry.category)}
                                    title={`${entry.name} in the docs: examples and every prop`}>
                                    Docs
                                </Button>
                                <div className="device-switch" role="group" aria-label="Preview size">
                                    {(Object.keys(DEVICES) as DeviceName[]).map(name => {
                                        const {label, icon: Icon} = DEVICES[name];
                                        const active = name === device;
                                        return (
                                            <Button
                                                key={name}
                                                size="sm"
                                                variant={active ? "filled" : "text"}
                                                color={active ? undefined : "var(--pg-muted)"}
                                                leftIcon={<Icon />}
                                                aria-label={label}
                                                aria-pressed={active}
                                                title={label}
                                                onClick={() => setDevice(name)}
                                            />
                                        );
                                    })}
                                    <span className="device-switch-divider" />
                                    <Button
                                        size="sm"
                                        variant="text"
                                        color="var(--pg-muted)"
                                        leftIcon={<RotateCw />}
                                        aria-label={landscape ? "Rotate to portrait" : "Rotate to landscape"}
                                        title={canRotate ? (landscape ? "Rotate to portrait" : "Rotate to landscape") : "Only phone and tablet rotate"}
                                        aria-pressed={canRotate && landscape}
                                        disabled={!canRotate}
                                        onClick={() => setLandscape(current => !current)}
                                    />
                                </div>
                                <Button
                                    size="sm"
                                    variant="text"
                                    color="var(--pg-muted)"
                                    leftIcon={propsHidden ? <PanelRightOpen /> : <PanelRightClose />}
                                    aria-label={propsHidden ? "Show properties" : "Hide properties"}
                                    title={propsHidden ? "Show properties" : "Hide properties"}
                                    aria-expanded={!propsHidden}
                                    aria-controls="props-pane"
                                    onClick={() => setPropsHidden(current => !current)}
                                />
                            </div>
                        </header>

                        <DevicePreview
                            device={device}
                            landscape={landscape}
                            entryName={entry.name}
                            values={values}
                            theme={theme}
                            language={language}
                        />

                        <CodePanel code={code} />
                    </main>

                    <aside id="props-pane" className="props" hidden={propsHidden} aria-labelledby="props-heading">
                        <div className="props-header">
                            <h2 id="props-heading">Properties</h2>
                            <button type="button" className="link-button" onClick={reset}>Reset</button>
                        </div>
                        {Object.entries(entry.controls).map(([name, control]) => (
                            <PropControl
                                key={`${entry.name}-${name}`}
                                name={name}
                                control={control}
                                value={values[name]}
                                onChange={value => setValue(name, value)}
                            />
                        ))}
                    </aside>
                </div>
            </div>
        </div>
    );
}
