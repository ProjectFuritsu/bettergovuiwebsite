import { LanguageProvider } from "bettergovregiondavaoui";
import { stopDemoLinks } from "../lib/demo-links.js";
import { useSettings } from "../lib/settings.js";
import { CodeBlock } from "./CodeBlock.jsx";
import { ErrorBoundary } from "./ErrorBoundary.jsx";

/** A live demo inside a guide page, in the same box as the component examples, with optional code under it. */
export function Demo({ children, code, language: codeLanguage = "jsx" }) {
    const { language } = useSettings();
    return (
        <div className="example-card">
            <div className="example-preview" lang={language} onClickCapture={stopDemoLinks}>
                <ErrorBoundary>
                    <LanguageProvider language={language}>{children}</LanguageProvider>
                </ErrorBoundary>
            </div>
            {code && <CodeBlock code={code} language={codeLanguage} />}
        </div>
    );
}
