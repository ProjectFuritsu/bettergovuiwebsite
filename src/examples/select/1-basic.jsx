// Options
// The browser's own `<select>`, so phones open their native picker. Strings are both the value and the label.
import { Select, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "24rem" }}>
            <Select
                label="City or municipality"
                placeholder="Choose a city"
                options={["Davao City", "Digos City", "Mati City", "Panabo City", "Samal", "Tagum City"]}
            />
        </Stack>
    );
}
