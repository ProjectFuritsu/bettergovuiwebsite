// Basic
// Arrow keys move between the tabs; Home and End jump to the first and last.
import { Tab, TabList, TabPanel, Tabs, Text } from "bettergovregiondavaoui";

export default function Example() {
    return (
        <Tabs defaultValue="requirements">
            <TabList aria-label="Business permit">
                <Tab value="requirements">Requirements</Tab>
                <Tab value="fees">Fees</Tab>
                <Tab value="steps">Steps</Tab>
            </TabList>
            <TabPanel value="requirements"><Text>Valid ID, barangay clearance, and proof of address.</Text></TabPanel>
            <TabPanel value="fees"><Text>₱500 for the permit, plus ₱150 for the sticker.</Text></TabPanel>
            <TabPanel value="steps"><Text>Apply online, pay, then pick up your permit in 3 working days.</Text></TabPanel>
        </Tabs>
    );
}
