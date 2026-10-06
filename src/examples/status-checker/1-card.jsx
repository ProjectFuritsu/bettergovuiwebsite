// Card
// Checks a website every 60 seconds (not while the tab is hidden). This site checks itself, so it's strict: only a success answer counts as Online.
import { StatusChecker } from "bettergovregiondavaoui";

export default function Example() {
    return <StatusChecker url={import.meta.env.BASE_URL} label="This site" style={{ maxWidth: "24rem" }} />;
}
