// Underline and color
// Use `underline="hover"` only for links that are clearly links anyway, like a menu.
import { Group, Link } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group gap="lg">
            <Link href="/permits">Always (default)</Link>
            <Link href="/permits" underline="hover">On hover</Link>
            <Link href="/permits" underline="never">Never</Link>
            <Link href="/withdraw" color="danger">Withdraw application</Link>
        </Group>
    );
}
