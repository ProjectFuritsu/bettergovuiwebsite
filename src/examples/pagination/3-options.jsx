// More pages, edges and sizes
// `siblings` shows more pages around the current one; `withEdges` adds first and last buttons.
import { Pagination, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="md">
            <Pagination total={30} defaultPage={15} siblings={2} withEdges />
            <Pagination total={8} size="sm" color="tertiary" />
        </Stack>
    );
}
