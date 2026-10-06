// Controlled
// `visible` and `onVisibleChange`, e.g. one switch for two fields.
import { PasswordInput, Stack, Switch } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [visible, setVisible] = useState(false);
    return (
        <Stack style={{ maxWidth: "24rem" }}>
            <PasswordInput label="New password" autoComplete="new-password" visible={visible} onVisibleChange={setVisible} toggle={false} />
            <PasswordInput label="Type it again" autoComplete="new-password" visible={visible} onVisibleChange={setVisible} toggle={false} />
            <Switch label="Show passwords" checked={visible} onChange={(event) => setVisible(event.target.checked)} />
        </Stack>
    );
}
