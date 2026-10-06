import {
    Accordion,
    AccordionItem,
    Alert,
    Avatar,
    Badge,
    Button,
    Card,
    CardDescription,
    CardFooter,
    CardTitle,
    DateInput,
    FileUpload,
    formatPeso,
    Group,
    Input,
    MobileNumberInput,
    PesoInput,
    Progress,
    Radio,
    RadioGroup,
    Select,
    Stack,
    StatusChecker,
    Switch,
    Table,
    Text,
    toast,
} from "bettergovregiondavaoui";
import { useEffect, useRef, useState } from "react";

// The cards on the home page: small, real screens of a city's online services, each built from the components.
// They're live: type, pick, upload. Nothing is sent anywhere.

function PermitRenewalCard() {
    return (
        <Card>
            <CardTitle>Renew your business permit</CardTitle>
            <CardDescription>Sari-sari store · BP-2026-01234</CardDescription>
            <Stack gap="md" style={{ marginTop: "var(--spacing-md)" }}>
                <Progress value={2} max={3} label="Step 2 of 3: Payment" size="sm" />
                <MobileNumberInput defaultValue="9171234567" description="We'll text you when it's ready." />
                <PesoInput label="Amount due" defaultValue={1500} readOnly />
            </Stack>
            <CardFooter>
                <Button
                    fullWidth
                    onClick={() => toast({ title: "Payment received", description: "Just a demo: no money moved.", color: "success" })}
                >
                    Pay ₱1,500.00
                </Button>
            </CardFooter>
        </Card>
    );
}

function NotificationsCard() {
    return (
        <Card>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>How we tell you about your applications.</CardDescription>
            <Stack gap="md" style={{ marginTop: "var(--spacing-md)" }}>
                <Switch label="SMS updates" description="When your status changes." defaultChecked />
                <Switch label="Email receipts" defaultChecked />
                <Switch label="Renewal reminders" description="30 days before a permit expires." />
            </Stack>
        </Card>
    );
}

const OFFICERS = [
    { name: "Maria Santos", role: "Licensing officer", status: "On duty", color: "success" },
    { name: "Jose Reyes", role: "Building inspector", status: "In the field", color: "info" },
    { name: "Ana Lim", role: "Cashier", status: "On leave", color: "secondary" },
];

function OfficersCard() {
    return (
        <Card>
            <CardTitle>Today's officers</CardTitle>
            <CardDescription>Business Permits and Licensing Office</CardDescription>
            <Stack as="ul" gap="md" style={{ marginTop: "var(--spacing-md)" }}>
                {OFFICERS.map((officer) => (
                    <Group as="li" key={officer.name} justify="space-between" wrap={false}>
                        <Group gap="sm" wrap={false}>
                            <Avatar name={officer.name} size="sm" />
                            <Stack gap={0}>
                                <Text size="sm" weight="semibold">{officer.name}</Text>
                                <Text size="xs" muted>{officer.role}</Text>
                            </Stack>
                        </Group>
                        <Badge size="sm" color={officer.color}>{officer.status}</Badge>
                    </Group>
                ))}
            </Stack>
        </Card>
    );
}

function PaymentMethodCard() {
    const [method, setMethod] = useState("gcash");
    return (
        <Card>
            <CardTitle>Payment method</CardTitle>
            <CardDescription>Real property tax, 2nd quarter</CardDescription>
            <Stack gap="md" style={{ marginTop: "var(--spacing-md)" }}>
                <RadioGroup label="Pay with" value={method} onValueChange={setMethod}>
                    <Radio value="gcash" label="GCash" description="Pay in the app, no fee" />
                    <Radio value="maya" label="Maya" description="Pay in the app, no fee" />
                    <Radio value="card" label="Debit or credit card" description="2% card fee" />
                    <Radio value="counter" label="Over the counter" description="At partner banks" />
                </RadioGroup>
            </Stack>
            <CardFooter>
                <Button fullWidth variant="outline">Continue</Button>
            </CardFooter>
        </Card>
    );
}

function TrackCard() {
    const [shown, setShown] = useState(false);
    return (
        <Card>
            <CardTitle>Track an application</CardTitle>
            <CardDescription>Use the reference number on your receipt.</CardDescription>
            <Stack gap="md" style={{ marginTop: "var(--spacing-md)" }}>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        setShown(true);
                    }}
                >
                    <Group gap="sm" wrap={false} align="end">
                        <Input label="Reference number" defaultValue="BC-2026-00981" style={{ flex: 1 }} />
                        <Button type="submit">Track</Button>
                    </Group>
                </form>
                {shown && (
                    <Alert color="success" title="Ready for pickup" onClose={() => setShown(false)}>
                        Barangay clearance · Window 4, City Hall
                    </Alert>
                )}
            </Stack>
        </Card>
    );
}

function AppointmentCard() {
    return (
        <Card>
            <CardTitle>Book an appointment</CardTitle>
            <CardDescription>Skip the line at the Civil Registry.</CardDescription>
            <Stack gap="md" style={{ marginTop: "var(--spacing-md)" }}>
                <Select label="Service" defaultValue="birth" options={[
                    { value: "birth", label: "Birth certificate" },
                    { value: "marriage", label: "Marriage certificate" },
                    { value: "cenomar", label: "Certificate of no marriage" },
                ]} />
                <DateInput label="Date" min={new Date()} />
            </Stack>
            <CardFooter>
                <Button fullWidth>Book</Button>
            </CardFooter>
        </Card>
    );
}

const STATUS_COLORS = { Approved: "success", Pending: "warning", Rejected: "danger" };
const APPLICATIONS = [
    { id: "BP-0142", fee: 1500, status: "Approved" },
    { id: "BP-0157", fee: 850, status: "Pending" },
    { id: "BP-0160", fee: 2300, status: "Pending" },
    { id: "BP-0133", fee: 1200, status: "Rejected" },
];

function ApplicationsCard() {
    return (
        <Card>
            <CardTitle>This week</CardTitle>
            <CardDescription>Business permit applications</CardDescription>
            <div style={{ marginTop: "var(--spacing-md)" }}>
                <Table
                    aria-label="Business permit applications this week"
                    rowKey="id"
                    data={APPLICATIONS}
                    columns={[
                        { key: "id", header: "Reference", sortable: true },
                        { key: "status", header: "Status", render: (row) => <Badge size="sm" color={STATUS_COLORS[row.status]}>{row.status}</Badge> },
                        { key: "fee", header: "Fee", align: "right", sortable: true, render: (row) => `₱${formatPeso(row.fee)}` },
                    ]}
                />
            </div>
        </Card>
    );
}

function UploadCard() {
    return (
        <Card>
            <CardTitle>Upload your documents</CardTitle>
            <CardDescription>Valid ID and proof of address. PDF or JPG, up to 5 MB each.</CardDescription>
            <div style={{ marginTop: "var(--spacing-md)" }}>
                <FileUpload aria-label="Documents" multiple maxFiles={3} accept=".pdf,.jpg,.jpeg,.png" maxSize={5 * 1024 * 1024} />
            </div>
        </Card>
    );
}

function FaqCard() {
    return (
        <Card>
            <CardTitle>Questions</CardTitle>
            <Accordion style={{ marginTop: "var(--spacing-md)" }}>
                <AccordionItem title="Do I need an account?">
                    <Text size="sm">Only to track applications. You can pay without one.</Text>
                </AccordionItem>
                <AccordionItem title="How long does it take?">
                    <Text size="sm">Usually 3 working days after you pay.</Text>
                </AccordionItem>
                <AccordionItem title="Can someone pick it up for me?">
                    <Text size="sm">Yes, with an authorization letter and a copy of your ID.</Text>
                </AccordionItem>
            </Accordion>
        </Card>
    );
}

function StatusCard() {
    return <StatusChecker url={import.meta.env.BASE_URL} label="e-Services portal" />;
}

/**
 * The cards the fade hides can't be focused or clicked (`inert`), so keyboard users only reach cards they can see.
 * A card counts as hidden once its bottom edge is in the lower half of the fade. It's worked out again whenever the
 * layout changes (a new screen width, a card growing), but never for the card someone is using right now.
 */
function useInertUnderFade(fadeRef, mosaicRef) {
    useEffect(() => {
        const fade = fadeRef.current;
        const mosaic = mosaicRef.current;
        function update() {
            const fadeHeight = parseFloat(getComputedStyle(fade, "::after").height) || 0;
            const limit = fade.getBoundingClientRect().bottom - fadeHeight / 2;
            for (const card of mosaic.children) {
                if (card.contains(document.activeElement)) continue;
                card.inert = card.getBoundingClientRect().bottom > limit;
            }
        }
        update();
        const observer = new ResizeObserver(update);
        observer.observe(fade);
        observer.observe(mosaic);
        return () => observer.disconnect();
    }, [fadeRef, mosaicRef]);
}

/**
 * The cards in columns, like a mosaic, fading out into the footer. In this order they fill the columns top to bottom
 * at about the same height.
 */
export function ShowcaseMosaic() {
    const fadeRef = useRef(null);
    const mosaicRef = useRef(null);
    useInertUnderFade(fadeRef, mosaicRef);
    return (
        <div className="landing-fade" ref={fadeRef}>
            <div className="landing-mosaic" ref={mosaicRef}>
                <PermitRenewalCard />
                <NotificationsCard />
                <ApplicationsCard />
                <OfficersCard />
                <PaymentMethodCard />
                <StatusCard />
                <TrackCard />
                <AppointmentCard />
                <UploadCard />
                <FaqCard />
            </div>
        </div>
    );
}
