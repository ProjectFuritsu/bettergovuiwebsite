// Sizes
// `xs` 320px to `xl` 800px wide (default `md`), never wider than the screen.
import { Button, Group, Modal, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [size, setSize] = useState(null);
    return (
        <>
            <Group>
                {["xs", "md", "xl"].map((option) => (
                    <Button key={option} variant="outline" onClick={() => setSize(option)}>{option}</Button>
                ))}
            </Group>
            <Modal open={size !== null} onClose={() => setSize(null)} size={size ?? "md"} title={`Size ${size}`}>
                <Text>Press Escape or click outside to close.</Text>
            </Modal>
        </>
    );
}
