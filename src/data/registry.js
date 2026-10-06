import api from "../generated/api.json";

// Every documented page of the library, in the order of the sidebar. A component page shows:
// - its examples, from src/examples/<slug>/ (see src/lib/examples.js)
// - a props table for each name in `exports` (the first is the main one), from the generated api.json
// - the helper `functions` and object `shapes` it uses

export const PACKAGE = api.package;
export const VERSION = api.version;
export const REPOSITORY = api.repository;
export const NPM_URL = `https://www.npmjs.com/package/${api.package}`;

const groups = [
    {
        title: "Typography",
        items: [
            { name: "Text" },
            { name: "Heading" },
            { name: "Link" },
            { name: "List", exports: ["List", "ListItem"] },
            { name: "Code" },
            { name: "Kbd" },
        ],
    },
    {
        title: "Layout",
        items: [
            {
                name: "Scaffold",
                exports: ["Scaffold", "ScaffoldHeader", "ScaffoldBurger", "ScaffoldNavbar", "ScaffoldMain", "ScaffoldAside", "ScaffoldFooter"],
            },
            { name: "Container" },
            { name: "Stack" },
            { name: "Group" },
            { name: "Grid" },
            { name: "Divider" },
        ],
    },
    {
        title: "Buttons",
        items: [
            {
                name: "Button",
                description: "A button for actions like Submit or Save. With `href` it becomes a link that looks like a button, for things like \"Apply now\".",
            },
        ],
    },
    {
        title: "Forms",
        items: [
            { name: "Input" },
            { name: "PasswordInput" },
            { name: "Textarea" },
            { name: "Select" },
            { name: "Checkbox" },
            { name: "Radio", exports: ["RadioGroup", "Radio"] },
            { name: "Switch" },
            { name: "DateInput" },
            { name: "FileUpload", functions: ["formatFileSize"] },
            { name: "Fieldset" },
        ],
    },
    {
        title: "Philippine fields",
        items: [
            {
                name: "AddressPicker",
                functions: ["psgcApi"],
                shapes: ["AddressValue", "AddressPlace", "AddressDataSource", "AddressPickerLabels"],
            },
            { name: "MobileNumberInput", functions: ["toMobileDigits"], shapes: ["MobileNumberDetails"] },
            { name: "PesoInput", functions: ["formatPeso"] },
            { name: "PhilSysInput" },
            { name: "TinInput" },
            { name: "GroupedNumberInput", functions: ["formatGroups"] },
        ],
    },
    {
        title: "Feedback",
        items: [
            { name: "Alert" },
            { name: "Badge" },
            { name: "Loader" },
            { name: "Progress" },
            { name: "Skeleton" },
            { name: "StatusChecker", functions: ["serverCheck"], shapes: ["StatusCheckDetails"] },
            {
                name: "Toast",
                exports: ["Toaster"],
                functions: ["toast"],
                shapes: ["ToastOptions"],
                description: "Short messages that pop up in a corner and go away by themselves, like \"Saved\". Put a `Toaster` in your app once, then call `toast()` from anywhere.",
            },
        ],
    },
    {
        title: "Navigation",
        items: [
            { name: "Navbar", exports: ["Navbar", "NavLink"] },
            {
                name: "Tabs",
                exports: ["Tabs", "TabList", "Tab", "TabPanel"],
                description: "Switches between panels of related content in the same place, e.g. Requirements, Fees and Steps for one permit. Arrow keys move between the tabs.",
            },
            { name: "Breadcrumbs" },
            { name: "Pagination", shapes: ["PaginationLabels"] },
            { name: "Stepper", exports: ["Stepper", "Step", "StepperCompleted"] },
        ],
    },
    {
        title: "Data display",
        items: [
            { name: "Table", shapes: ["TableColumn", "TableSort"] },
            { name: "Accordion", exports: ["Accordion", "AccordionItem"] },
            { name: "Card", exports: ["Card", "CardTitle", "CardDescription", "CardSection", "CardFooter"] },
            { name: "Avatar", functions: ["getInitials"] },
            { name: "Tooltip" },
        ],
    },
    {
        title: "Overlays",
        items: [
            { name: "Modal" },
            { name: "Drawer" },
        ],
    },
];

const blocks = [
    { name: "LandingPage" },
    { name: "HeaderBlock", shapes: ["HeaderBlockLink", "BlockActionLink"] },
    { name: "HeroBlock", shapes: ["BlockActionLink"] },
    { name: "StatsBlock", shapes: ["StatsBlockItem"] },
    { name: "FeaturesBlock", shapes: ["FeaturesBlockItem"] },
    { name: "NewsBlock", shapes: ["NewsBlockItem"] },
    { name: "FaqBlock", shapes: ["FaqBlockItem"] },
    { name: "ContactBlock", shapes: ["ContactBlockHours"] },
    { name: "CtaBlock", shapes: ["BlockActionLink"] },
    { name: "FooterBlock", shapes: ["FooterBlockColumn", "FooterBlockLink"] },
];

export const FOUNDATIONS = [
    { slug: "colors", title: "Colors and theming" },
    { slug: "typography", title: "Typography" },
    { slug: "spacing", title: "Spacing and sizes" },
    { slug: "dark-mode", title: "Dark mode" },
    { slug: "languages", title: "Languages" },
    { slug: "icons", title: "Icons" },
    { slug: "accessibility", title: "Accessibility" },
    { slug: "semantic-html", title: "Semantic HTML" },
].map((page) => ({ ...page, to: `/foundations/${page.slug}` }));

/** "DateInput" → "date-input": the page address of a component. */
export const slugify = (name) => name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

/** The first sentence, for cards and link previews. */
const firstSentence = (text) => text.match(/^[\s\S]*?[.!?](?=\s|$)/)?.[0] ?? text;

function entry(item, kind, group) {
    const exports = item.exports ?? [item.name];
    const description = item.description ?? api.components[exports[0]]?.description ?? "";
    const slug = slugify(item.name);
    return {
        ...item,
        kind,
        group,
        slug,
        to: `/${kind}/${slug}`,
        exports,
        functions: item.functions ?? [],
        shapes: item.shapes ?? [],
        description,
        summary: firstSentence(description),
    };
}

export const COMPONENT_GROUPS = groups.map((group) => ({
    title: group.title,
    items: group.items.map((item) => entry(item, "components", group.title)),
}));

export const BLOCKS = blocks.map((item) => entry(item, "blocks", "Blocks"));

export const COMPONENTS = COMPONENT_GROUPS.flatMap((group) => group.items);

/** Every page in sidebar order, for the previous / next links at the bottom of each page. */
export const PAGE_ORDER = [
    { to: "/getting-started", title: "Getting started" },
    ...FOUNDATIONS.map((page) => ({ to: page.to, title: page.title })),
    { to: "/components", title: "All components" },
    ...COMPONENTS.map((item) => ({ to: item.to, title: item.name })),
    { to: "/blocks", title: "All blocks" },
    ...BLOCKS.map((item) => ({ to: item.to, title: item.name })),
];

export function findEntry(kind, slug) {
    return (kind === "blocks" ? BLOCKS : COMPONENTS).find((item) => item.slug === slug);
}

export { api };
