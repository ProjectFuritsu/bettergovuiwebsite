import { Card, Text } from "bettergovregiondavaoui";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link as RouterLink, useLocation } from "react-router";
import { PAGE_ORDER } from "../data/registry.js";

/** Links to the pages before and after this one, in sidebar order. */
export function PrevNext() {
    const { pathname } = useLocation();
    const index = PAGE_ORDER.findIndex((page) => page.to === pathname);
    if (index === -1) return null;
    const prev = PAGE_ORDER[index - 1];
    const next = PAGE_ORDER[index + 1];
    return (
        <nav aria-label="Previous and next page" className="prev-next">
            {prev ? (
                <Card hoverable padding="md" className="link-card prev-next-card">
                    <Text size="sm" muted>Previous</Text>
                    <RouterLink to={prev.to} className="card-link" rel="prev"><ArrowLeft aria-hidden="true" /> {prev.title}</RouterLink>
                </Card>
            ) : <span />}
            {next && (
                <Card hoverable padding="md" className="link-card prev-next-card prev-next-card-next">
                    <Text size="sm" muted>Next</Text>
                    <RouterLink to={next.to} className="card-link" rel="next">{next.title} <ArrowRight aria-hidden="true" /></RouterLink>
                </Card>
            )}
        </nav>
    );
}
