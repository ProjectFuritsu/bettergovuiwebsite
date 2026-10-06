// Services
// Cards with an `href` are clickable anywhere. On wide screens up to `columns` columns; one on phones.
// @frame 640
import { FeaturesBlock } from "bettergovregiondavaoui";
import { Building2, CalendarDays, FileText, HandCoins, IdCard, Stethoscope } from "lucide-react";

export default function Example() {
    return (
        <FeaturesBlock
            eyebrow="Online services"
            title="What you can do online"
            description="No need to line up: these services are open day and night."
            features={[
                { icon: <Building2 />, title: "Business permits", description: "Apply or renew in 10 minutes.", href: "/permits" },
                { icon: <HandCoins />, title: "Real property tax", description: "See your assessment and pay.", href: "/rpt" },
                { icon: <FileText />, title: "Barangay clearance", description: "Ready in one working day.", href: "/clearance" },
                { icon: <IdCard />, title: "Civil registry", description: "Birth, marriage and death certificates.", href: "/civil-registry" },
                { icon: <Stethoscope />, title: "Health services", description: "Find a health center near you.", href: "/health" },
                { icon: <CalendarDays />, title: "Appointments", description: "Book a time and skip the line.", href: "/appointments" },
            ]}
        />
    );
}
