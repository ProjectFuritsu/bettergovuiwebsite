// Without a map, in Filipino
// The small labels above each detail follow the LanguageProvider; `labels` sets your own.
// @frame 420
import { ContactBlock } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <ContactBlock
            title="Makipag-ugnayan sa amin"
            phone="(082) 123 4567"
            email="help@example.gov.ph"
            hours={[{ days: "Lunes – Biyernes", time: "8:00 AM – 5:00 PM" }]}
            labels={{ phone: "Telepono", email: "Email", hours: "Oras ng opisina" }}
        />
    );
}
