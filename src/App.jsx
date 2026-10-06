import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { PlainLayout } from "./layout/PlainLayout.jsx";
import { SiteLayout } from "./layout/SiteLayout.jsx";
import { Changelog } from "./pages/Changelog.jsx";
import { ComponentPage } from "./pages/ComponentPage.jsx";
import { FOUNDATION_PAGES } from "./pages/foundations/index.js";
import { FramePage } from "./pages/FramePage.jsx";
import { GettingStarted } from "./pages/GettingStarted.jsx";
import { IndexPage } from "./pages/IndexPage.jsx";
import { Home } from "./pages/landing/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";

// The UI Studio loads only when it's opened, so the docs stay light.
const StudioPage = lazy(() => import("./studio/StudioPage.tsx"));
const StudioFrame = lazy(() => import("./studio/StudioFrame.tsx"));

export default function App() {
    return (
        <Routes>
            {/* One example on its own, for the phone / tablet / desktop previews. */}
            <Route path="frame/:slug/:example" element={<FramePage />} />

            {/* The UI Studio: edit a component's props and copy the code. Its preview frame loads /studio-frame. */}
            <Route path="studio/:slug?" element={<Suspense><StudioPage /></Suspense>} />
            <Route path="studio-frame" element={<Suspense><StudioFrame /></Suspense>} />

            {/* The home page has its own layout: no docs sidebar */}
            <Route index element={<Home />} />

            {/* Pages outside the docs: the site header and footer, no sidebar */}
            <Route element={<PlainLayout />}>
                <Route path="changelog" element={<Changelog />} />
            </Route>

            <Route element={<SiteLayout />}>
                <Route path="getting-started" element={<GettingStarted />} />
                {Object.entries(FOUNDATION_PAGES).map(([slug, Page]) => (
                    <Route key={slug} path={`foundations/${slug}`} element={<Page />} />
                ))}
                <Route path="components" element={<IndexPage kind="components" />} />
                <Route path="components/:slug" element={<ComponentPage kind="components" />} />
                <Route path="blocks" element={<IndexPage kind="blocks" />} />
                <Route path="blocks/:slug" element={<ComponentPage kind="blocks" />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
