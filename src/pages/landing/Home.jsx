import {
    Button,
    Heading,
    LanguageProvider,
    Link,
    Tab,
    TabList,
    TabPanel,
    Tabs,
    Text,
    Toaster,
} from "bettergovregiondavaoui";
import { ArrowRight } from "lucide-react";
import { ErrorBoundary } from "../../components/ErrorBoundary.jsx";
import { NPM_URL, PACKAGE, REPOSITORY } from "../../data/registry.js";
import { SiteHeaderContent } from "../../layout/SiteHeader.jsx";
import { stopDemoLinks } from "../../lib/demo-links.js";
import { sitePath } from "../../lib/paths.js";
import { useSettings } from "../../lib/settings.js";
import { useInternalLinks } from "../../lib/useInternalLinks.js";
import { useScrollOnNavigate } from "../../lib/useScrollOnNavigate.js";
import { useTitle } from "../../lib/useTitle.js";
import { ApplicationForm } from "./ApplicationForm.jsx";
import "./home.css";
import { InstallCommand } from "./InstallCommand.jsx";
import { PagePreview } from "./PagePreview.jsx";
import { ShowcaseMosaic } from "./ShowcaseCards.jsx";

/** A live demo on the home page: in the preview language from the header, with its links kept on the page. */
function Preview({ children }) {
    const { language } = useSettings();
    return (
        <div lang={language} onClickCapture={stopDemoLinks}>
            <ErrorBoundary>
                <LanguageProvider language={language}>{children}</LanguageProvider>
            </ErrorBoundary>
        </div>
    );
}

/** The home page: a shadcn/ui-style introduction, built with the kit itself. */
export function Home() {
    useTitle(null);
    useInternalLinks();
    useScrollOnNavigate();

    return (
        <div className="landing">
            <a href="#main" className="skip-link">Skip to main content</a>
            <header className="site-header site-header-standalone site-header-sticky">
                <SiteHeaderContent />
            </header>

            <main id="main" tabIndex={-1}>
                {/* Full width, so the background reaches the edges; the content stays in the page's column */}
                <section className="landing-hero" aria-labelledby="landing-title">
                    <div className="landing-wrap landing-hero-inner">
                        <a href={sitePath("/studio")} className="landing-pill">
                            <span className="landing-pill-tag">New</span>
                            <span>Try every component in the UI Studio</span>
                            <ArrowRight aria-hidden="true" />
                        </a>
                        <Heading level={1} id="landing-title" className="landing-title">
                            Build government websites that work for everyone
                        </Heading>
                        <Text className="landing-lead">
                            Accessible React components and page blocks for Philippine public services. In English, Filipino
                            and Bisaya, light on slow phones, and free for anyone to use.
                        </Text>
                        <InstallCommand command={`npm install ${PACKAGE}`} />
                        <div className="landing-actions">
                            <Button href={sitePath("/getting-started")} color="var(--text)" autoContrast>Get started</Button>
                            <Button href={sitePath("/components")} variant="outline" color="var(--text)" className="landing-outline">
                                Browse components
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="landing-wrap landing-showcase" aria-labelledby="examples-title">
                    <h2 id="examples-title" className="visually-hidden">Examples</h2>
                    <Tabs defaultValue="services" variant="segmented" size="sm" panelGap="md">
                        <div className="landing-showcase-bar">
                            <TabList aria-label="Examples">
                                <Tab value="services">Services</Tab>
                                <Tab value="form">Application form</Tab>
                                <Tab value="dashboard">Dashboard</Tab>
                                <Tab value="page">Landing page</Tab>
                            </TabList>
                        </div>
                        <TabPanel value="services">
                            <Preview><ShowcaseMosaic /></Preview>
                        </TabPanel>
                        <TabPanel value="form">
                            <Preview><ApplicationForm /></Preview>
                        </TabPanel>
                        <TabPanel value="dashboard">
                            <PagePreview slug="scaffold" id="app" height={600} />
                        </TabPanel>
                        <TabPanel value="page">
                            <PagePreview slug="landing-page" id="full" height={720} />
                        </TabPanel>
                    </Tabs>
                </section>
            </main>

            <footer className="landing-footer">
                <div className="landing-wrap">
                    <Text size="sm" muted>
                        Built for BetterGov Region Davao by ProjectFuritsu. The source code is on{" "}
                        <Link href={REPOSITORY} external>GitHub</Link> and the package on <Link href={NPM_URL} external>npm</Link>.
                        Dedicated to the public domain under CC0 1.0.
                    </Text>
                </div>
            </footer>
            <Toaster />
        </div>
    );
}
