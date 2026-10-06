import {
    AddressPicker,
    Button,
    Checkbox,
    Fieldset,
    FileUpload,
    Grid,
    Group,
    Input,
    MobileNumberInput,
    PesoInput,
    Select,
    Stack,
    Text,
    TinInput,
    toast,
} from "bettergovregiondavaoui";

/** A whole application form, the kind every city hall needs, built from the form components and Philippine fields. */
export function ApplicationForm() {
    function submit(event) {
        event.preventDefault();
        toast({ title: "Application submitted", description: "Just a demo: nothing was sent.", color: "success" });
    }

    return (
        <form onSubmit={submit} className="landing-form">
            <Stack gap="xs">
                <Text size="lg" weight="bold">New business permit</Text>
                <Text size="sm" muted>Takes about 10 minutes. You can save and finish later.</Text>
            </Stack>
            <Grid columns={2} minColumnWidth="18rem" gap="lg">
                <Fieldset legend="Owner">
                    <Input label="Full name" autoComplete="name" required />
                    <MobileNumberInput required />
                    <Input label="Email" type="email" autoComplete="email" />
                </Fieldset>
                <Fieldset legend="Business">
                    <Input label="Business name" required />
                    <Select
                        label="Type"
                        placeholder="Choose one"
                        options={["Sole proprietorship", "Partnership", "Corporation", "Cooperative"]}
                        required
                    />
                    <Group gap="md" grow align="start">
                        <PesoInput label="Capital" />
                        <TinInput />
                    </Group>
                </Fieldset>
                <AddressPicker legend="Business address" limitToRegion="110000000" />
                <Fieldset legend="Documents">
                    <FileUpload label="DTI or SEC registration" description="PDF or JPG, up to 5 MB." accept=".pdf,.jpg,.jpeg" maxSize={5 * 1024 * 1024} />
                    <Checkbox label="I confirm that the information is true and correct." required />
                </Fieldset>
            </Grid>
            <Group justify="end" gap="sm">
                <Button variant="outline" type="button" onClick={() => toast("Draft saved")}>Save draft</Button>
                <Button type="submit">Submit application</Button>
            </Group>
        </form>
    );
}
