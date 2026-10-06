// Icons, prefixes and buttons
// `prefix` and `suffix` are fixed text that screen readers read with the field. `rightSection` holds something clickable, like a clear button.
import { Button, Input, Stack } from "bettergovregiondavaoui";
import { Search, X } from "lucide-react";
import { useState } from "react";

export default function Example() {
    const [query, setQuery] = useState("permit");
    return (
        <Stack style={{ maxWidth: "24rem" }}>
            <Input
                aria-label="Search services"
                leftIcon={<Search />}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                rightSection={query && (
                    <Button variant="text" size="sm" color="secondary" leftIcon={<X />} aria-label="Clear search" onClick={() => setQuery("")} />
                )}
            />
            <Input label="Website" prefix="https://" suffix=".gov.ph" placeholder="davao" />
            <Input label="Floor area" type="number" suffix="sq m" />
        </Stack>
    );
}
