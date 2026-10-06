import { Accessibility } from "./Accessibility.jsx";
import { Colors } from "./Colors.jsx";
import { DarkMode } from "./DarkMode.jsx";
import { Icons } from "./Icons.jsx";
import { Languages } from "./Languages.jsx";
import { SemanticHtml } from "./SemanticHtml.jsx";
import { Spacing } from "./Spacing.jsx";
import { Typography } from "./Typography.jsx";

/** The Foundations pages by slug; their titles and order are in FOUNDATIONS (src/data/registry.js). */
export const FOUNDATION_PAGES = {
    colors: Colors,
    typography: Typography,
    spacing: Spacing,
    "dark-mode": DarkMode,
    languages: Languages,
    icons: Icons,
    accessibility: Accessibility,
    "semantic-html": SemanticHtml,
};
