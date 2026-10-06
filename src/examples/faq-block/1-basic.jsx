// Questions and answers
// They open one at a time, with the title beside them on wide screens.
// @frame 520
import { FaqBlock } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <FaqBlock
            description="Can't find your answer? Our help desk replies within one working day."
            action={{ label: "Contact the help desk", href: "/help" }}
            items={[
                { question: "Do I need an account?", answer: "Only to track applications. You can pay without one." },
                { question: "Which payment methods can I use?", answer: "GCash, Maya, debit and credit cards, and over-the-counter at partner banks." },
                { question: "How do I get my official receipt?", answer: "It's emailed to you right after you pay. You can also download it from your account." },
                { question: "Can I still apply at the office?", answer: "Yes. Online is just faster." },
            ]}
        />
    );
}
