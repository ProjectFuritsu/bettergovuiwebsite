// Variants
// `underline` (default), `outline`, `pills` and `segmented`.
import { Stack, Tab, TabList, Tabs } from "bettergovregiondavaoui";

const VARIANTS = ["underline", "outline", "pills", "segmented"];

export default function Example() {
    return (
        <Stack gap="lg">
            {VARIANTS.map((variant) => (
                <Tabs key={variant} variant={variant} defaultValue="all">
                    <TabList aria-label={`${variant} tabs`}>
                        <Tab value="all">All</Tab>
                        <Tab value="pending">Pending</Tab>
                        <Tab value="approved">Approved</Tab>
                    </TabList>
                </Tabs>
            ))}
        </Stack>
    );
}
