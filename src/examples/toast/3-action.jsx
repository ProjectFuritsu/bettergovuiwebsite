// With an action, or updated later
// `action` adds a button; clicking it also closes the toast. Calling `toast` again with the same `id` replaces it.
import { Button, Group, toast } from "bettergovregiondavaoui";

export default function Example() {
    function remove() {
        toast({
            description: "Document removed.",
            action: { label: "Undo", onClick: () => toast("Document restored") },
        });
    }

    function upload() {
        toast({ id: "upload", title: "Uploading…", duration: 0 });
        setTimeout(() => toast({ id: "upload", title: "Uploaded", color: "success" }), 1500);
    }

    return (
        <Group>
            <Button variant="outline" color="danger" onClick={remove}>Remove document</Button>
            <Button variant="outline" onClick={upload}>Upload</Button>
        </Group>
    );
}
