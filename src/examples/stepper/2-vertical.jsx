// Vertical, with icons
// Horizontal steppers turn vertical by themselves when there isn't room.
import { Step, Stepper } from "bettergovregiondavaoui";
import { CreditCard, FileCheck, Package } from "lucide-react";

export default function Example() {
    return (
        <Stepper active={1} orientation="vertical" color="success">
            <Step label="Application approved" description="October 1" icon={<FileCheck />} />
            <Step label="Payment" description="Pay ₱650 online or at the office" icon={<CreditCard />} />
            <Step label="Pickup" description="Bring your ID" icon={<Package />} />
        </Stepper>
    );
}
