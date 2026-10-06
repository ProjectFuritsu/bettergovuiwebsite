// Controlled
// `page` and `onPageChange`, e.g. to load that page of results.
import { Pagination, Stack, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [page, setPage] = useState(4);
    return (
        <Stack gap="sm">
            <Text size="sm" muted>Showing results {(page - 1) * 10 + 1}–{page * 10} of 200</Text>
            <Pagination total={20} page={page} onPageChange={setPage} />
        </Stack>
    );
}
