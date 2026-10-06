import { useCallback, useEffect, useMemo, useState } from "react";
import { LANGUAGES, SettingsContext } from "./settings.js";

const THEME_KEY = "bgui-theme";
const LANGUAGE_KEY = "bgui-language";

function read(key) {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
}

function write(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch {
        // Private windows and blocked storage: the choice just won't be remembered.
    }
}

export function SettingsProvider({ children }) {
    // index.html has already set data-theme before the first paint.
    const [theme, setThemeState] = useState(() => document.documentElement.dataset.theme === "dark" ? "dark" : "light");
    const [language, setLanguageState] = useState(() => {
        const saved = read(LANGUAGE_KEY);
        return LANGUAGES.some((option) => option.value === saved) ? saved : "en";
    });

    // Follow the device's setting until the visitor picks a theme themselves.
    useEffect(() => {
        const query = matchMedia("(prefers-color-scheme: dark)");
        const follow = () => {
            if (read(THEME_KEY)) return;
            const next = query.matches ? "dark" : "light";
            document.documentElement.dataset.theme = next;
            setThemeState(next);
        };
        query.addEventListener("change", follow);
        return () => query.removeEventListener("change", follow);
    }, []);

    const setTheme = useCallback((next) => {
        document.documentElement.dataset.theme = next;
        write(THEME_KEY, next);
        setThemeState(next);
    }, []);

    const setLanguage = useCallback((next) => {
        write(LANGUAGE_KEY, next);
        setLanguageState(next);
    }, []);

    const value = useMemo(() => ({ theme, setTheme, language, setLanguage }), [theme, setTheme, language, setLanguage]);
    return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}
