// Placement and color
// It moves to the other side when there isn't room.
import { Button, Group, Tooltip } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Group>
            <Tooltip label="On top" placement="top"><Button variant="outline">Top</Button></Tooltip>
            <Tooltip label="Below" placement="bottom"><Button variant="outline">Bottom</Button></Tooltip>
            <Tooltip label="On the left" placement="left"><Button variant="outline">Left</Button></Tooltip>
            <Tooltip label="On the right" placement="right"><Button variant="outline">Right</Button></Tooltip>
            <Tooltip label="Primary background" color="primary"><Button variant="outline">Colored</Button></Tooltip>
        </Group>
    );
}
