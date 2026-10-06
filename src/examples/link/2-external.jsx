// External
// Opens in a new tab, with a small arrow, and tells screen readers it opens a new tab.
import { Link, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Text>
            Find other agencies on the <Link href="https://www.gov.ph" external>GOV.PH portal</Link>.
        </Text>
    );
}
