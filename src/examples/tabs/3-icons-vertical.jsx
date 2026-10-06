// Icons and vertical
// `orientation="vertical"` puts the tabs on the left; up and down arrows move between them.
import { Tab, TabList, TabPanel, Tabs, Text } from "bettergovregiondavaoui";
import { Lock, Settings, User } from "lucide-react";

export default function Example() {
    return (
        <Tabs defaultValue="profile" orientation="vertical" variant="pills">
            <TabList aria-label="Account settings">
                <Tab value="profile" leftIcon={<User />}>Profile</Tab>
                <Tab value="security" leftIcon={<Lock />}>Security</Tab>
                <Tab value="preferences" leftIcon={<Settings />}>Preferences</Tab>
            </TabList>
            <TabPanel value="profile"><Text>Your name, address and contact details.</Text></TabPanel>
            <TabPanel value="security"><Text>Your password and sign-in methods.</Text></TabPanel>
            <TabPanel value="preferences"><Text>Language and notifications.</Text></TabPanel>
        </Tabs>
    );
}
