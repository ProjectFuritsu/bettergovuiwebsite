import { Outlet } from "react-router";
import { useInternalLinks } from "../lib/useInternalLinks.js";
import { useScrollOnNavigate } from "../lib/useScrollOnNavigate.js";
import { SiteFooterContent } from "./SiteFooter.jsx";
import { SiteHeaderContent } from "./SiteHeader.jsx";

/** For pages that aren't part of the docs, like the changelog: the site header and footer, without the sidebar. */
export function PlainLayout() {
    useInternalLinks();
    useScrollOnNavigate();
    return (
        <div className="plain-layout">
            <a href="#main" className="skip-link">Skip to main content</a>
            <header className="site-header site-header-standalone site-header-sticky">
                <SiteHeaderContent />
            </header>
            <main id="main" tabIndex={-1} className="plain-main">
                <div className="site-content">
                    <Outlet />
                </div>
            </main>
            <footer className="site-footer-standalone">
                <SiteFooterContent />
            </footer>
        </div>
    );
}
