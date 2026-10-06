// Filters
// A panel that slides in from an edge. Control it with `open` and `onClose`, like Modal.
import { Button, Checkbox, Drawer, Select, Stack } from "bettergovregiondavaoui";
import { Filter } from "lucide-react";
import { useState } from "react";

export default function Example() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <>
            <Button variant="outline" leftIcon={<Filter />} onClick={() => setOpen(true)}>Filters</Button>
            <Drawer
                open={open}
                onClose={close}
                title="Filter applications"
                footer={<Button fullWidth onClick={close}>Show results</Button>}
            >
                <Stack>
                    <Select label="Status" options={["All", "Pending", "Approved", "Rejected"]} />
                    <Checkbox label="Only mine" />
                    <Checkbox label="Filed this month" />
                </Stack>
            </Drawer>
        </>
    );
}
