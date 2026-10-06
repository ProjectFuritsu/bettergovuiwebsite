// Other websites
// A browser can't read other sites' answers. Any answer counts as Online; none shows "Can't reach", which may mean the site is down or that it blocks checks from other sites (GOV.PH does). For a real status page, check from your server with `serverCheck`.
import { Stack, StatusChecker } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack gap="sm" style={{ maxWidth: "24rem" }}>
            <StatusChecker url="https://www.gov.ph" label="GOV.PH" />
            <StatusChecker url="https://psgc.gitlab.io/api/regions/" label="PSGC API" />
        </Stack>
    );
}
