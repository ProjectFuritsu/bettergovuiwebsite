// A whole page
// Header, navbar, main content, aside and footer. Try the phone size: the navbar becomes a menu that the ☰ button opens. The first Tab press shows "Skip to main content".
// @frame 560
import {
    Badge,
    Card,
    CardDescription,
    CardTitle,
    Grid,
    Heading,
    Navbar,
    NavLink,
    Scaffold,
    ScaffoldAside,
    ScaffoldBurger,
    ScaffoldFooter,
    ScaffoldHeader,
    ScaffoldMain,
    ScaffoldNavbar,
    Stack,
    Text,
} from "bettergovregiondavaoui";
import { FileText, House, Receipt, Settings } from "lucide-react";

export default function Example() {
    return (
        <Scaffold>
            <ScaffoldHeader sticky>
                <ScaffoldBurger />
                <strong>BetterGov Davao</strong>
            </ScaffoldHeader>
            <ScaffoldNavbar>
                <Navbar>
                    <NavLink href="/" active icon={<House />}>Dashboard</NavLink>
                    <NavLink href="/permits" icon={<FileText />} badge={3}>Permits</NavLink>
                    <NavLink href="/payments" icon={<Receipt />}>Payments</NavLink>
                    <NavLink href="/settings" icon={<Settings />}>Settings</NavLink>
                </Navbar>
            </ScaffoldNavbar>
            <ScaffoldMain>
                <Stack gap="lg">
                    <Heading level={1}>Dashboard</Heading>
                    <Grid columns={2} minColumnWidth="12rem">
                        <Card>
                            <CardTitle>Business permit</CardTitle>
                            <CardDescription>Renewal due January 20</CardDescription>
                            <Badge color="warning">Due soon</Badge>
                        </Card>
                        <Card>
                            <CardTitle>Real property tax</CardTitle>
                            <CardDescription>Paid for 2026</CardDescription>
                            <Badge color="success">Paid</Badge>
                        </Card>
                    </Grid>
                </Stack>
            </ScaffoldMain>
            <ScaffoldAside>
                <Stack gap="xs">
                    <Heading level={2} size={6}>Need help?</Heading>
                    <Text size="sm" muted>Call (082) 123 4567, Monday to Friday, 8 AM to 5 PM.</Text>
                </Stack>
            </ScaffoldAside>
            <ScaffoldFooter>
                <Text size="sm" muted>© 2026 BetterGov Region Davao</Text>
            </ScaffoldFooter>
        </Scaffold>
    );
}
