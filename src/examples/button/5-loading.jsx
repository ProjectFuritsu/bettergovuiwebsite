// Loading
// Blocks clicks and shows an animation while something saves. The button keeps its width, so nothing moves.
import { Button, Group } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [saving, setSaving] = useState(false);

    function save() {
        setSaving(true);
        setTimeout(() => setSaving(false), 2000);
    }

    return (
        <Group>
            <Button loading={saving} onClick={save}>Save changes</Button>
            <Button loading loaderType="dots" variant="outline">Sending</Button>
            <Button loading loaderType="bars" variant="text">Uploading</Button>
        </Group>
    );
}
