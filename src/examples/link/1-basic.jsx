// In text
// Links in text are underlined, so people who can't tell colors apart can still find them. Size and font follow the text around them.
import { Link, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Text>
            Check the <Link href="/requirements">list of requirements</Link> before you apply.
        </Text>
    );
}
