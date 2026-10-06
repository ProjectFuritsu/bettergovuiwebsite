// Badge
// A small pill, e.g. next to a link in a list of services.
import { Group, Link, StatusChecker } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group gap="sm">
            <Link href="/">This site</Link>
            <StatusChecker url="/" variant="badge" />
        </Group>
    );
}
