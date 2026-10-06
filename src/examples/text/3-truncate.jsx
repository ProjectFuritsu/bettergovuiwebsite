// Long text
// `truncate` keeps it on one line with "…"; `lineClamp` shows at most that many lines. The full text stays in the page for screen readers.
import { Stack, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="md" style={{ maxWidth: "20rem" }}>
            <Text truncate>Application for a mayor's permit to operate a sari-sari store in Barangay Talomo</Text>
            <Text lineClamp={2}>
                Bring a valid ID, your barangay clearance, and proof of your business address. Payments can be made at the
                City Treasurer's Office or online through the e-Services portal.
            </Text>
        </Stack>
    );
}
