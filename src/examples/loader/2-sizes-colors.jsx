// Sizes and colors
// It takes the color of the text around it by default.
import { Group, Loader } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group gap="lg" align="center">
            <Loader size="xs" color="primary" />
            <Loader size="sm" color="primary" />
            <Loader color="primary" />
            <Loader size="lg" color="success" />
            <Loader size="xl" color="tertiary" type="dots" />
        </Group>
    );
}
