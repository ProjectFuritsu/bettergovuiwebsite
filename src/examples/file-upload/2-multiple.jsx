// Several files
// `multiple` with `maxFiles`. `onFilesChange` gives the whole list each time one is added or removed.
import { FileUpload, Stack, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [files, setFiles] = useState([]);
    return (
        <Stack style={{ maxWidth: "28rem" }}>
            <FileUpload
                label="Supporting documents"
                description="Up to 3 files."
                multiple
                maxFiles={3}
                files={files}
                onFilesChange={setFiles}
            />
            <Text size="sm" muted>{files.length} of 3 files added.</Text>
        </Stack>
    );
}
