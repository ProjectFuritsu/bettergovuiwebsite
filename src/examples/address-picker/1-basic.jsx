// Region to barangay
// Each list loads from the official PSGC list when the field above it is chosen. The form sends the PSGC codes as `address.region`, `address.province`, `address.city` and `address.barangay`.
import { AddressPicker } from "bettergovregiondavaoui";

export default function Example() {
    return <AddressPicker legend="Home address" name="address" style={{ maxWidth: "32rem" }} />;
}
