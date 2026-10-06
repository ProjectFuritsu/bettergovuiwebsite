// Initials and photos
// Without a photo (or when it fails to load), the initials show, in a color picked from the name so each person keeps theirs.
import { Avatar, Group } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group>
            <Avatar name="Maria Santos" />
            <Avatar name="Jose Reyes" />
            <Avatar name="Ana Lim" />
            <Avatar name="Carlo Mendoza" src="/examples/missing-photo.jpg" />
            <Avatar />
        </Group>
    );
}
