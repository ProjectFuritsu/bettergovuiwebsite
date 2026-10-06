import { LanguageProvider, Text, Toaster } from "bettergovregiondavaoui";
import { Suspense, useEffect } from "react";
import { useParams, useSearchParams } from "react-router";
import { ErrorBoundary } from "../components/ErrorBoundary.jsx";
import { stopDemoLinks } from "../lib/demo-links.js";
import { findExample } from "../lib/examples.js";
import { LANGUAGES } from "../lib/settings.js";

/**
 * One example alone on the page, with nothing of the docs around it, for the phone / tablet / desktop
 * previews (they load this in an iframe). The theme comes from ?theme= (read in index.html), the language from ?lang=.
 */
export function FramePage() {
    const { slug, example: id } = useParams();
    const [params] = useSearchParams();
    const language = LANGUAGES.some((option) => option.value === params.get("lang")) ? params.get("lang") : "en";
    const example = findExample(slug, id);

    useEffect(() => {
        document.documentElement.lang = language;
        document.title = example ? `${example.title} · Preview` : "Preview";
    }, [language, example]);

    if (!example) return <Text>There's no example called "{slug}/{id}".</Text>;
    const { Component } = example;
    return (
        <div onClickCapture={stopDemoLinks}>
            <ErrorBoundary>
                <LanguageProvider language={language}>
                    <Suspense fallback={null}>
                        <Component />
                    </Suspense>
                    <Toaster />
                </LanguageProvider>
            </ErrorBoundary>
        </div>
    );
}
