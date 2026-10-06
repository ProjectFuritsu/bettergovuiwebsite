// More, narrower columns
// `columns` is the most columns; `minColumnWidth` is how narrow one may get before the grid uses fewer.
import { Grid } from "bettergovregiondavaoui";

const box = { padding: "1rem", background: "var(--surface-muted)", borderRadius: "var(--radius)", textAlign: "center" };

export default function Example() {
    return (
        <Grid columns={4} minColumnWidth="8rem" gap="sm">
            {["1", "2", "3", "4", "5", "6", "7", "8"].map((item) => <div key={item} style={box}>{item}</div>)}
        </Grid>
    );
}
