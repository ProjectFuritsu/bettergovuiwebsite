// Without pictures
// For advisories, where the words matter more.
// @frame 420
import { NewsBlock } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <NewsBlock
            title="Advisories"
            columns={2}
            items={[
                { title: "Online payments unavailable Saturday night", href: "/advisories/1", date: "2026-10-04", category: "Maintenance" },
                { title: "Offices closed on November 1 and 2", href: "/advisories/2", date: "2026-10-02", category: "Holiday" },
            ]}
        />
    );
}
