// Basic
// Give every table a `caption`: it's the table's name for screen readers. On narrow screens each row turns into a small card.
import { Table } from "bettergovregiondavaoui";

const fees = [
    { item: "Mayor's permit", amount: "₱500.00" },
    { item: "Sanitary permit", amount: "₱200.00" },
    { item: "Fire safety inspection", amount: "₱150.00" },
];

export default function Example() {
    return (
        <Table
            caption="Fees for a new business permit"
            columns={[
                { key: "item", header: "Item" },
                { key: "amount", header: "Amount", align: "right" },
            ]}
            data={fees}
            rowKey="item"
        />
    );
}
