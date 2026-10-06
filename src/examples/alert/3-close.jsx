// Closing
// `onClose` adds a × button. Hide the alert in it.
import { Alert, Button } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [shown, setShown] = useState(true);
    if (!shown) return <Button variant="outline" onClick={() => setShown(true)}>Show the advisory again</Button>;
    return (
        <Alert color="warning" title="System maintenance" onClose={() => setShown(false)}>
            Online payments are unavailable on Saturday, 10 PM to 2 AM.
        </Alert>
    );
}
