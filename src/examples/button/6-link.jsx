// As a link
// With `href`, it's an `<a>` that looks like a button, for buttons that go to another page. Screen readers then call it a link, which is what it is.
import { Button, Group } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group>
            <Button href="/apply">Apply now</Button>
            <Button href="https://www.gov.ph" target="_blank" variant="outline">GOV.PH</Button>
        </Group>
    );
}
