// Numbers that show results
// Three or four look best.
// @frame 380
import { StatsBlock } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <StatsBlock
            eyebrow="2026 so far"
            title="Faster service, fewer trips"
            stats={[
                { value: "12,480", label: "Permits issued", description: "Up 18% from last year" },
                { value: "3 days", label: "Average processing time", description: "Down from 12 days" },
                { value: "98%", label: "Applied online" },
                { value: "4.7 / 5", label: "Citizen satisfaction" },
            ]}
        />
    );
}
