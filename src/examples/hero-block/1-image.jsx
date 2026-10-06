// With a picture
// The title is the page's `<h1>`. On phones the picture moves under the text.
// @frame 560
import { HeroBlock } from "bettergovregiondavaoui";
import cityHall from "../images/city-hall.svg";

export default function Example() {
    return (
        <HeroBlock
            eyebrow="Davao Region e-Services"
            title="Government services, without the long lines"
            description="Apply for permits, pay your taxes and book appointments online, from your phone."
            primaryAction={{ label: "Apply now", href: "/apply" }}
            secondaryAction={{ label: "See requirements", href: "/requirements" }}
            image={cityHall}
            imageAlt="Illustration of a city hall"
        />
    );
}
