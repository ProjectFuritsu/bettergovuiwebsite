// Clickable cards
// `hoverable` lifts cards people can click. Here the title's link covers the whole card, so there's one link per card for screen readers.
import { Card, CardDescription, CardTitle, Grid } from "bettergovregiondavaoui";

const services = [
    { title: "Pay real property tax", href: "/rpt", text: "Get your assessment and pay online." },
    { title: "Request a barangay clearance", href: "/clearance", text: "Ready in one working day." },
    { title: "Book an appointment", href: "/appointments", text: "Skip the line at the office." },
];

export default function Example() {
    return (
        <Grid as="ul" minColumnWidth="13rem">
            {services.map((service) => (
                <Card as="li" key={service.href} hoverable style={{ position: "relative" }}>
                    <CardTitle>
                        <a href={service.href} style={{ color: "inherit", textDecoration: "none" }}>
                            {service.title}
                            <span style={{ position: "absolute", inset: 0 }} aria-hidden="true" />
                        </a>
                    </CardTitle>
                    <CardDescription>{service.text}</CardDescription>
                </Card>
            ))}
        </Grid>
    );
}
