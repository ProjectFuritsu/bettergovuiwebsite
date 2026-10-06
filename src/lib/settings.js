import { createContext, useContext } from "react";

// The visitor's choices: light or dark theme, and the language of the components' built-in texts in the previews.
// The docs themselves stay in English; only the demos switch. SettingsProvider holds the state.

export const LANGUAGES = [
    { value: "en", label: "English" },
    { value: "fil", label: "Filipino" },
    { value: "ceb", label: "Bisaya" },
];

/**
 * @typedef {{
 *     theme: "light" | "dark",
 *     setTheme: (theme: "light" | "dark") => void,
 *     language: "en" | "fil" | "ceb",
 *     setLanguage: (language: "en" | "fil" | "ceb") => void,
 * }} Settings
 */

/** @type {import("react").Context<Settings | null>} */
export const SettingsContext = createContext(null);

export function useSettings() {
    const settings = useContext(SettingsContext);
    if (!settings) throw new Error("useSettings needs a SettingsProvider around it");
    return settings;
}
