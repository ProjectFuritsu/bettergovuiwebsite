// Values, labels and disabled options
// Objects give each option a value separate from its label, and can be `disabled`.
import { Select, Stack } from "bettergovregiondavaoui";
import { FileText } from "lucide-react";

export default function Example() {
    return (
        <Stack style={{ maxWidth: "24rem" }}>
            <Select
                label="Document"
                description="Only documents you can request online are listed."
                leftIcon={<FileText />}
                defaultValue="clearance"
                options={[
                    { value: "clearance", label: "Barangay clearance" },
                    { value: "residency", label: "Certificate of residency" },
                    { value: "indigency", label: "Certificate of indigency" },
                    { value: "business", label: "Business clearance (walk-in only)", disabled: true },
                ]}
            />
        </Stack>
    );
}
