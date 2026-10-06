// A plain row
// Without a title, just the numbers, e.g. under a hero.
// @frame 220
import { StatsBlock } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <StatsBlock
            stats={[
                { value: "48", label: "Barangays served" },
                { value: "24/7", label: "Online services" },
                { value: "₱0", label: "Convenience fee" },
            ]}
        />
    );
}
