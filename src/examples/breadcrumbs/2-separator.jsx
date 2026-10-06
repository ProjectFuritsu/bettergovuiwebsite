// Separator, size and color
import { Breadcrumbs, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="md">
            <Breadcrumbs separator="/">
                <a href="/">Home</a>
                <a href="/news">News</a>
                <span>Advisories</span>
            </Breadcrumbs>
            <Breadcrumbs size="lg" color="tertiary">
                <a href="/">Home</a>
                <a href="/offices">Offices</a>
                <span>City Treasurer</span>
            </Breadcrumbs>
        </Stack>
    );
}
