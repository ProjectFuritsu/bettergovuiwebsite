// Sizes, icons and corners
import { Badge, Group } from "bettergovregiondavaoui";
import { Check, Clock } from "lucide-react";

export default function Example() {
    return (
        <Group gap="sm" align="center">
            <Badge size="xs">xs</Badge>
            <Badge size="sm">sm</Badge>
            <Badge>md</Badge>
            <Badge size="lg">lg</Badge>
            <Badge size="xl">xl</Badge>
            <Badge color="success" leftIcon={<Check />}>Paid</Badge>
            <Badge color="warning" rightIcon={<Clock />} radius={4}>Waiting</Badge>
        </Group>
    );
}
