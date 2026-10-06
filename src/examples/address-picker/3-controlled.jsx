// Reading the address
// `onChange` gives the whole address: each place with its `code` and `name`. Save the codes; names can be respelled.
import { AddressPicker, Code, Stack } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [address, setAddress] = useState({});
    return (
        <Stack style={{ maxWidth: "32rem" }}>
            <AddressPicker legend="Address" limitToRegion="110000000" value={address} onChange={setAddress} variant="plain" />
            <Code block>{JSON.stringify(address, null, 2)}</Code>
        </Stack>
    );
}
