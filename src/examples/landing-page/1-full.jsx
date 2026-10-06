// A whole page
// Pass each section's props; leave out the ones you don't need. LandingPage adds the skip link and the `<main>` landmark around the content. Try the phone size.
// @frame 900
import { LandingPage } from "bettergovregiondavaoui";
import { Building2, CalendarDays, FileText, HandCoins, IdCard, Stethoscope } from "lucide-react";

export default function Example() {
    return (
        <LandingPage
            header={{
                logo: "BetterGov Davao",
                links: [
                    { label: "Services", href: "#services", active: true },
                    { label: "News", href: "#news" },
                    { label: "Contact", href: "#contact" },
                ],
                action: { label: "Sign in", href: "/sign-in" },
                sticky: true,
            }}
            hero={{
                eyebrow: "Davao Region e-Services",
                title: "Government services, without the long lines",
                description: "Apply for permits, pay your taxes and book appointments online, from your phone.",
                primaryAction: { label: "Apply now", href: "/apply" },
                secondaryAction: { label: "See requirements", href: "/requirements" },
                image: "/examples/city-hall.svg",
                imageAlt: "",
            }}
            stats={{
                stats: [
                    { value: "12,480", label: "Permits issued this year" },
                    { value: "3 days", label: "Average processing time", description: "Down from 12 days" },
                    { value: "98%", label: "Applied online" },
                ],
            }}
            features={{
                id: "services",
                eyebrow: "Online services",
                title: "What you can do online",
                features: [
                    { icon: <Building2 />, title: "Business permits", description: "Apply or renew in 10 minutes.", href: "/permits" },
                    { icon: <HandCoins />, title: "Real property tax", description: "See your assessment and pay.", href: "/rpt" },
                    { icon: <FileText />, title: "Barangay clearance", description: "Ready in one working day.", href: "/clearance" },
                    { icon: <IdCard />, title: "Civil registry", description: "Birth, marriage and death certificates.", href: "/civil-registry" },
                    { icon: <Stethoscope />, title: "Health services", description: "Find a health center near you.", href: "/health" },
                    { icon: <CalendarDays />, title: "Appointments", description: "Book a time and skip the line.", href: "/appointments" },
                ],
            }}
            news={{
                id: "news",
                action: { label: "All news", href: "/news" },
                items: [
                    { title: "Business One-Stop Shop opens in January", href: "/news/boss", date: "2026-10-01", category: "Event", image: "/examples/news-market.svg", imageAlt: "" },
                    { title: "Road repairs on J.P. Laurel Avenue this week", href: "/news/roads", date: "2026-09-28", category: "Advisory", image: "/examples/news-road.svg", imageAlt: "" },
                    { title: "Free flu shots at barangay health centers", href: "/news/flu", date: "2026-09-25", category: "Health", image: "/examples/news-health.svg", imageAlt: "" },
                ],
            }}
            faq={{
                items: [
                    { question: "Do I need an account?", answer: "Only to track applications. You can pay without one." },
                    { question: "Which payment methods can I use?", answer: "GCash, Maya, debit and credit cards, and over-the-counter at partner banks." },
                    { question: "Can I still apply at the office?", answer: "Yes. Online is just faster." },
                ],
                action: { label: "Contact the help desk", href: "#contact" },
            }}
            contact={{
                id: "contact",
                address: <>Help Desk, Ground Floor<br />San Pedro Street, Davao City</>,
                phone: "(082) 123 4567",
                email: "help@example.gov.ph",
                hours: [{ days: "Monday – Friday", time: "8:00 AM – 5:00 PM" }, { days: "Saturday and Sunday", time: "Closed" }],
            }}
            cta={{
                title: "Ready to apply?",
                description: "It takes about 10 minutes. Have a valid ID ready.",
                primaryAction: { label: "Start your application", href: "/apply" },
            }}
            footer={{
                logo: "BetterGov Davao",
                description: "Online services for the people of Davao Region.",
                columns: [
                    { title: "Services", links: [{ label: "Permits", href: "/permits" }, { label: "Taxes", href: "/rpt" }] },
                    { title: "About", links: [{ label: "Offices", href: "/offices" }, { label: "News", href: "/news" }] },
                ],
                copyright: "© 2026 BetterGov Region Davao",
                bottomLinks: [{ label: "Privacy", href: "/privacy" }, { label: "Accessibility", href: "/accessibility" }],
            }}
        />
    );
}
