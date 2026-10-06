// Types
// For screen readers it says "Loading", in the current language.
import { Group, Loader } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group gap="xl">
            <Loader />
            <Loader type="dots" />
            <Loader type="bars" />
        </Group>
    );
}
