// Showing a toast
// Call `toast()` from anywhere. It needs one `<Toaster />` in your app; this site already has one, so the example doesn't add it.
import { Button, Group, toast } from "bettergovregiondavaoui";

// In your app, once: <Toaster />

export default function Example() {
    return (
        <Group>
            <Button variant="outline" onClick={() => toast("Draft saved")}>Text only</Button>
            <Button
                onClick={() => toast({
                    title: "Application submitted",
                    description: "We'll text you when it's ready.",
                    color: "success",
                })}
            >
                With a title
            </Button>
        </Group>
    );
}
