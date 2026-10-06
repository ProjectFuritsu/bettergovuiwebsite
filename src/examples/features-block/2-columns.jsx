// Two columns, no links
// Cards without `href` only show information.
// @frame 480
import { FeaturesBlock } from "bettergovregiondavaoui";
import { Accessibility, Languages, Smartphone, WifiOff } from "lucide-react";

export default function Example() {
    return (
        <FeaturesBlock
            title="Made for everyone"
            columns={2}
            features={[
                { icon: <Smartphone />, title: "Works on any phone", description: "Even older, low-cost ones." },
                { icon: <WifiOff />, title: "Light on data", description: "Pages load quickly on mobile data." },
                { icon: <Languages />, title: "Your language", description: "English, Filipino and Bisaya." },
                { icon: <Accessibility />, title: "Accessible", description: "Works with screen readers and keyboards." },
            ]}
        />
    );
}
