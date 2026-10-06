// Positions
// From any edge. For top and bottom, `size` sets the height.
import { Button, Drawer, Group, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [position, setPosition] = useState(null);
    return (
        <>
            <Group>
                {["left", "right", "top", "bottom"].map((option) => (
                    <Button key={option} variant="outline" onClick={() => setPosition(option)}>{option}</Button>
                ))}
            </Group>
            <Drawer open={position !== null} onClose={() => setPosition(null)} position={position ?? "right"} size="sm" title={`From the ${position}`}>
                <Text>Press Escape or click outside to close.</Text>
            </Drawer>
        </>
    );
}
