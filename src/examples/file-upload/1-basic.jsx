// One file
// Choose a file or drag it onto the box. Files that are too big or the wrong type are turned away with a message.
import { FileUpload, Stack } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "28rem" }}>
            <FileUpload
                label="Valid ID"
                description="PDF, JPG or PNG, up to 5 MB."
                name="validId"
                accept=".pdf,.jpg,.jpeg,.png"
                maxSize={5 * 1024 * 1024}
            />
        </Stack>
    );
}
