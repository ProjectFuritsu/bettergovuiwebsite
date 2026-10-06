// Empty
// Shown when there are no rows. Translated by LanguageProvider, or pass your own `emptyText`.
import { Table } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Table
            caption="Your payments"
            columns={[
                { key: "date", header: "Date" },
                { key: "for", header: "For" },
                { key: "amount", header: "Amount", align: "right" },
            ]}
            data={[]}
        />
    );
}
