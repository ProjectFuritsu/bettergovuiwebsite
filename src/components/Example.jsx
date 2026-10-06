import { Heading, LanguageProvider, Loader, Stack } from "bettergovregiondavaoui";
import { Suspense } from "react";
import { stopDemoLinks } from "../lib/demo-links.js";
import { useSettings } from "../lib/settings.js";
import { exampleAnchor } from "../lib/toc.js";
import { CodeBlock } from "./CodeBlock.jsx";
import { ErrorBoundary } from "./ErrorBoundary.jsx";
import { FramePreview } from "./FramePreview.jsx";
import { RichText } from "./RichText.jsx";

/** One example: its title and description, the live component, and its code. */
export function Example({ example }) {
    const { language } = useSettings();
    const { Component } = example;
    const id = exampleAnchor(example.id);
    return (
        <Stack gap="sm" as="section" aria-labelledby={id} className="example">
            <Heading level={3} id={id}>{example.title}</Heading>
            <RichText text={example.description} />
            <div className="example-card">
                {example.frameHeight ? (
                    <FramePreview example={example} />
                ) : (
                    <div className="example-preview" lang={language} onClickCapture={stopDemoLinks}>
                        <ErrorBoundary>
                            <LanguageProvider language={language}>
                                <Suspense fallback={<Loader size="sm" color="primary" />}>
                                    <Component />
                                </Suspense>
                            </LanguageProvider>
                        </ErrorBoundary>
                    </div>
                )}
                <CodeBlock code={example.code} />
            </div>
        </Stack>
    );
}
