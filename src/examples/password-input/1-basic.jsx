// Show and hide
// The eye button shows what's typed. It warns when Caps Lock is on, hides the password again when the form is sent, and turns off spell-check.
import { PasswordInput, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "24rem" }}>
            <PasswordInput label="Password" autoComplete="current-password" />
            <PasswordInput
                label="New password"
                description="At least 12 characters. A short sentence is easy to remember."
                autoComplete="new-password"
            />
        </Stack>
    );
}
