// Sortable, with badges
// `sortable` columns sort when their heading is clicked. `render` shows anything in a cell; `sortValue` sorts by something else than what's shown.
import { Badge, formatPeso, Table } from "bettergovregiondavaoui";

const STATUS_COLORS = { Approved: "success", Pending: "warning", Rejected: "danger" };

const applications = [
    { id: "BP-2026-0142", applicant: "Maria Santos", filed: "2026-09-28", fee: 1500, status: "Approved" },
    { id: "BP-2026-0157", applicant: "Jose Reyes", filed: "2026-10-02", fee: 850, status: "Pending" },
    { id: "BP-2026-0160", applicant: "Ana Lim", filed: "2026-10-03", fee: 2300, status: "Pending" },
    { id: "BP-2026-0133", applicant: "Carlo Mendoza", filed: "2026-09-21", fee: 1200, status: "Rejected" },
];

const columns = [
    { key: "id", header: "Reference", sortable: true },
    { key: "applicant", header: "Applicant", sortable: true },
    {
        key: "filed",
        header: "Filed",
        sortable: true,
        render: (row) => new Date(row.filed).toLocaleDateString("en-PH", { dateStyle: "medium" }),
    },
    { key: "fee", header: "Fee", align: "right", sortable: true, render: (row) => `₱${formatPeso(row.fee)}` },
    { key: "status", header: "Status", render: (row) => <Badge color={STATUS_COLORS[row.status]}>{row.status}</Badge> },
];

export default function Example() {
    return (
        <Table
            caption="Applications this week"
            columns={columns}
            data={applications}
            rowKey="id"
            defaultSort={{ key: "filed", direction: "descending" }}
            striped
        />
    );
}
