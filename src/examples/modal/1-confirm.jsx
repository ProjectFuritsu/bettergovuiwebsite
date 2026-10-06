// Confirm an action
// A `<dialog>` people have to deal with first. Escape, the × button and a click outside call `onClose`.
import { Button, Modal, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);
    return (
        <>
            <Button onClick={() => setOpen(true)}>Submit application</Button>
            <Modal
                open={open}
                onClose={close}
                title="Submit your application?"
                description="You can't change it after you submit."
                footer={(
                    <>
                        <Button variant="text" onClick={close}>Keep editing</Button>
                        <Button onClick={close}>Submit</Button>
                    </>
                )}
            >
                <Text>We'll review it within 3 working days and text you at +63 917 123 4567.</Text>
            </Modal>
        </>
    );
}
