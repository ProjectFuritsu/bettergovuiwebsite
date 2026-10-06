// Latest news
// Each card is a link. Dates follow the LanguageProvider's language: switch the preview language at the top.
// @frame 620
import { NewsBlock } from "bettergovregiondavaoui";
import newsHealth from "../images/news-health.svg";
import newsMarket from "../images/news-market.svg";
import newsRoad from "../images/news-road.svg";

export default function Example() {
    return (
        <NewsBlock
            action={{ label: "All news", href: "/news" }}
            items={[
                {
                    title: "Business One-Stop Shop opens in January",
                    href: "/news/boss",
                    date: "2026-10-01",
                    category: "Event",
                    excerpt: "Renew your permit with every office in one place, January 2 to 31.",
                    image: newsMarket,
                    imageAlt: "",
                },
                {
                    title: "Road repairs on J.P. Laurel Avenue this week",
                    href: "/news/roads",
                    date: "2026-09-28",
                    category: "Advisory",
                    excerpt: "Expect one lane closed from 9 PM to 5 AM, Monday to Thursday.",
                    image: newsRoad,
                    imageAlt: "",
                },
                {
                    title: "Free flu shots at barangay health centers",
                    href: "/news/flu",
                    date: "2026-09-25",
                    category: "Health",
                    excerpt: "For seniors, children and pregnant women. Bring a valid ID.",
                    image: newsHealth,
                    imageAlt: "",
                },
            ]}
        />
    );
}
