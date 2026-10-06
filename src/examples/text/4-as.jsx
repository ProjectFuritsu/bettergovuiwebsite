// Inside other text
// `as="span"` for text inside a paragraph, `as="small"` for fine print, `as="strong"` for importance screen readers can hear.
import { Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Text>
            Office hours are <Text as="strong" weight="bold">8:00 AM to 5:00 PM</Text>, Monday to Friday.{" "}
            <Text as="small" size="sm" muted>(Closed on national holidays.)</Text>
        </Text>
    );
}
