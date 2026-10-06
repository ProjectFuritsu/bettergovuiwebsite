// Full width and disabled
// `fullWidth` fills the container, which works well on phones. Disabled buttons can't be clicked or focused.
import { Button, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "20rem" }}>
            <Button fullWidth>Continue</Button>
            <Button fullWidth disabled>Submit (complete all steps first)</Button>
        </Stack>
    );
}
