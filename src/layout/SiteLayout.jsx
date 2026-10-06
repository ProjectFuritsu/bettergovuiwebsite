import {
    Scaffold,
    ScaffoldAside,
    ScaffoldBurger,
    ScaffoldFooter,
    ScaffoldHeader,
    ScaffoldMain,
    ScaffoldNavbar,
    Toaster,
} from "bettergovregiondavaoui";
import { useState } from "react";
import { Outlet } from "react-router";
import { PrevNext } from "../components/PrevNext.jsx";
import { TocSlotContext } from "../lib/toc.js";
import { useInternalLinks } from "../lib/useInternalLinks.js";
import { useScrollOnNavigate } from "../lib/useScrollOnNavigate.js";
import { SiteFooterContent } from "./SiteFooter.jsx";
import { SiteHeaderContent } from "./SiteHeader.jsx";
import { SiteNav } from "./SiteNav.jsx";

export function SiteLayout() {
    useInternalLinks();
    useScrollOnNavigate();
    const [tocSlot, setTocSlot] = useState(null);

    return (
        <TocSlotContext.Provider value={tocSlot}>
            <Scaffold className="site">
                <ScaffoldHeader sticky className="site-header">
                    <ScaffoldBurger />
                    <SiteHeaderContent />
                </ScaffoldHeader>

                <ScaffoldNavbar aria-label="Docs" width="17rem">
                    <SiteNav />
                </ScaffoldNavbar>

                <ScaffoldMain padding="xl" className="site-main">
                    <div className="site-content">
                        <Outlet />
                        <PrevNext />
                    </div>
                </ScaffoldMain>

                <ScaffoldAside width="15rem" className="site-aside">
                    <div ref={setTocSlot} />
                </ScaffoldAside>

                <ScaffoldFooter className="site-footer">
                    <SiteFooterContent />
                </ScaffoldFooter>
                <Toaster />
            </Scaffold>
        </TocSlotContext.Provider>
    );
}
