// Colors
import { Button, Group, toast } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group>
            <Button color="info" variant="outline" onClick={() => toast({ title: "Tip", description: "You can save and finish later." })}>Info</Button>
            <Button color="success" variant="outline" onClick={() => toast({ title: "Payment received", color: "success" })}>Success</Button>
            <Button color="warning" variant="outline" onClick={() => toast({ title: "Session ends in 2 minutes", color: "warning" })}>Warning</Button>
            <Button color="danger" variant="outline" onClick={() => toast({ title: "Upload failed", description: "Check your connection.", color: "danger" })}>Danger</Button>
        </Group>
    );
}
