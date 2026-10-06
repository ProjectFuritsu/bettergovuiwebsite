// Office details with a map
// The phone number calls on phones; the email opens the mail app. `map` takes an embed URL (here OpenStreetMap) or your own element.
// @frame 560
import { ContactBlock } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <ContactBlock
            description="Visit, call or email us. We reply within one working day."
            address={<>Help Desk, Ground Floor<br />San Pedro Street, Davao City</>}
            phone="(082) 123 4567"
            email="help@example.gov.ph"
            hours={[
                { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
                { days: "Saturday and Sunday", time: "Closed" },
            ]}
            action={{ label: "Get directions", href: "https://www.openstreetmap.org/?mlat=7.0647&mlon=125.6087#map=17/7.0647/125.6087" }}
            map="https://www.openstreetmap.org/export/embed.html?bbox=125.6037%2C7.0607%2C125.6137%2C7.0687&layer=mapnik&marker=7.0647%2C125.6087"
            mapTitle="Map of the help desk on San Pedro Street"
        />
    );
}
