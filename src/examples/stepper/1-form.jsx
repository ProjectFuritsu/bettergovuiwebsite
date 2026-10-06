// A form in steps
// Steps before `active` show as done. Each Step's content shows while it's the current one; StepperCompleted shows after the last.
import { Button, Group, Input, Stack, Step, Stepper, StepperCompleted, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [active, setActive] = useState(0);
    const next = () => setActive((step) => Math.min(step + 1, 3));
    const back = () => setActive((step) => Math.max(step - 1, 0));

    return (
        <Stack gap="lg">
            <Stepper active={active} onStepClick={setActive}>
                <Step label="Owner" description="Who you are">
                    <Input label="Full name" />
                </Step>
                <Step label="Business" description="What you do">
                    <Input label="Business name" />
                </Step>
                <Step label="Review" description="Check and send">
                    <Text>Check your answers, then submit.</Text>
                </Step>
                <StepperCompleted>
                    <Text>Submitted! Your reference number is BP-2026-01234.</Text>
                </StepperCompleted>
            </Stepper>
            <Group>
                <Button variant="outline" onClick={back} disabled={active === 0}>Back</Button>
                <Button onClick={next} disabled={active === 3}>{active === 2 ? "Submit" : "Next"}</Button>
            </Group>
        </Stack>
    );
}
