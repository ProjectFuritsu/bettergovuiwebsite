// Columns that adjust
// Up to 3 columns by default, fewer when there isn't room: 3 on desktop, 2 on tablets, 1 on phones.
import { Card, CardDescription, CardTitle, Grid } from "bettergovregiondavaoui";

const services = ["Business permit", "Barangay clearance", "Building permit", "Cedula", "Real property tax", "Civil registry"];

export default function Example() {
    return (
        <Grid>
            {services.map((service) => (
                <Card key={service}>
                    <CardTitle>{service}</CardTitle>
                    <CardDescription>Apply and pay online.</CardDescription>
                </Card>
            ))}
        </Grid>
    );
}
