// Controlled, keeping state
// `value` and `onValueChange`. `keepMounted` keeps hidden panels in the page, so typed text survives switching tabs.
import { Input, Stack, Tab, TabList, TabPanel, Tabs, Text } from "bettergovregiondavaoui";
import { useState } from "react";

export default function Example() {
    const [tab, setTab] = useState("owner");
    return (
        <Stack>
            <Tabs value={tab} onValueChange={setTab} keepMounted grow>
                <TabList aria-label="Application">
                    <Tab value="owner">Owner</Tab>
                    <Tab value="business">Business</Tab>
                </TabList>
                <TabPanel value="owner"><Input label="Owner's name" /></TabPanel>
                <TabPanel value="business"><Input label="Business name" /></TabPanel>
            </Tabs>
            <Text size="sm" muted>Showing: {tab}</Text>
        </Stack>
    );
}
