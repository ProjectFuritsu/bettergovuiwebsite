// Select all
// `indeterminate` shows a dash when only some are checked.
import { Checkbox, Stack } from "bettergovregiondavaoui";
import { useState } from "react";

const DOCUMENTS = ["Valid ID", "Barangay clearance", "Proof of address"];

export default function Example() {
    const [checked, setChecked] = useState(["Valid ID"]);
    const all = checked.length === DOCUMENTS.length;
    const toggle = (document) => setChecked((list) => (list.includes(document) ? list.filter((item) => item !== document) : [...list, document]));

    return (
        <Stack gap="sm">
            <Checkbox
                label="I have all the documents"
                checked={all}
                indeterminate={checked.length > 0 && !all}
                onChange={() => setChecked(all ? [] : DOCUMENTS)}
            />
            <Stack gap="sm" style={{ paddingLeft: "1.75rem" }}>
                {DOCUMENTS.map((document) => (
                    <Checkbox key={document} label={document} checked={checked.includes(document)} onChange={() => toggle(document)} />
                ))}
            </Stack>
        </Stack>
    );
}
