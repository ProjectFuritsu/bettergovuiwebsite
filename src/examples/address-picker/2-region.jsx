// One region only
// `limitToRegion` with the region's PSGC code hides the region field. "110000000" is Davao Region.
import { AddressPicker } from "bettergovregiondavaoui";

export default function Example() {
    return <AddressPicker legend="Business address" limitToRegion="110000000" required style={{ maxWidth: "32rem" }} />;
}
