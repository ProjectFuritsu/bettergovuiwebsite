import {
    Alert,
    Code,
    FileUpload,
    LanguageProvider,
    Link,
    MESSAGES,
    MobileNumberInput,
    PhilSysInput,
    Radio,
    RadioGroup,
    Stack,
    Table,
    Text,
} from "bettergovregiondavaoui";
import { useState } from "react";
import { CodeBlock } from "../../components/CodeBlock.jsx";
import { OnThisPage } from "../../components/OnThisPage.jsx";
import { PageHeader } from "../../components/PageHeader.jsx";
import { Section } from "../../components/Section.jsx";
import { PACKAGE, REPOSITORY } from "../../data/registry.js";
import { LANGUAGES } from "../../lib/settings.js";
import { useTitle } from "../../lib/useTitle.js";

/** Example values for the texts that are functions, like `page(3)` → "Page 3". */
const SAMPLE_ARGUMENTS = {
    page: [3],
    wrongType: ["id.heic"],
    tooLarge: ["id.pdf", "5 MB"],
    tooMany: [3],
    belowMin: ["₱100.00"],
    aboveMax: ["₱50,000.00"],
    checkedAt: ["2:30 PM"],
};

/** Every text, as rows: its key (like `address.city`) and its wording in each language. */
function messageRows() {
    const rows = [];
    const walk = (english, path) => {
        for (const [key, value] of Object.entries(english)) {
            const id = path ? `${path}.${key}` : key;
            if (value && typeof value === "object") {
                walk(value, id);
                continue;
            }
            const row = { key: typeof value === "function" ? `${id}(…)` : id };
            for (const { value: language } of LANGUAGES) {
                const text = id.split(".").reduce((messages, part) => messages[part], MESSAGES[language]);
                row[language] = typeof text === "function" ? text(...(SAMPLE_ARGUMENTS[key] ?? [])) : text;
            }
            rows.push(row);
        }
    };
    walk(MESSAGES.en, "");
    return rows;
}

const ROWS = messageRows();

function LanguageDemo() {
    const [language, setLanguage] = useState("fil");
    return (
        <div className="example-card">
            <div className="example-preview" lang={language}>
                <Stack gap="lg">
                    <RadioGroup label="Language" orientation="horizontal" value={language} onValueChange={setLanguage}>
                        {LANGUAGES.map((option) => <Radio key={option.value} value={option.value} label={option.label} />)}
                    </RadioGroup>
                    <LanguageProvider language={language}>
                        <Stack gap="md" style={{ maxWidth: "26rem" }}>
                            <MobileNumberInput />
                            <PhilSysInput />
                            <FileUpload />
                            <Code block copyable>npm install {PACKAGE}</Code>
                        </Stack>
                    </LanguageProvider>
                </Stack>
            </div>
            <CodeBlock code={`<LanguageProvider language="${language}">
    <MobileNumberInput />
    <PhilSysInput />
    <FileUpload />
    <Code block copyable>npm install ${PACKAGE}</Code>
</LanguageProvider>`} />
        </div>
    );
}

const TOC = [
    { id: "choose", title: "Choose a language", level: 2 },
    { id: "your-words", title: "Use your own words", level: 2 },
    { id: "dates", title: "Dates and numbers", level: 2 },
    { id: "all-texts", title: "All the texts", level: 2 },
];

export function Languages() {
    useTitle("Languages");
    return (
        <Stack gap="xl">
            <PageHeader eyebrow="Foundations" title="Languages">
                The components' own texts come in English, Filipino and Bisaya (Cebuano): close buttons, "Loading", address
                labels, error messages, and the names screen readers say for menus and lists.
            </PageHeader>

            <Section id="choose" title="Choose a language">
                <Text>Put <Code>LanguageProvider</Code> around your app. Without one, everything is in English.</Text>
                <LanguageDemo />
                <Text>
                    Also set the page's language, <Code>{'<html lang="fil">'}</Code> (or <Code>"ceb"</Code>, <Code>"en"</Code>),
                    so screen readers pronounce it correctly. On this site, the language menu at the top switches every preview.
                </Text>
            </Section>

            <Section id="your-words" title="Use your own words">
                <Text>
                    <strong>Your own text always wins.</strong> A prop like <Code>closeLabel</Code> or <Code>label</Code> is used
                    whatever the language. To change a text across the whole app, pass <Code>messages</Code>: groups like{" "}
                    <Code>address</Code> can be given in part.
                </Text>
                <CodeBlock code={`<LanguageProvider language="fil" messages={{ close: "Sirado", address: { city: "Lungsod" } }}>
    <App />
</LanguageProvider>

<Alert closeLabel="Isara ang abiso" onClose={hide}>…</Alert>`} />
            </Section>

            <Section id="dates" title="Dates and numbers">
                <Text>
                    Dates in blocks follow the language (<Code>fil-PH</Code>). Browsers that don't have Bisaya date names yet use
                    English ones. In your own code, <Code>useLanguage()</Code> gives the current language and{" "}
                    <Code>dateLocale()</Code> the locale to format with:
                </Text>
                <CodeBlock code={`import { dateLocale, useLanguage } from "${PACKAGE}";

function Deadline({ date }) {
    const language = useLanguage();
    return <time dateTime={date.toISOString()}>{date.toLocaleDateString(dateLocale(language), { dateStyle: "long" })}</time>;
}`} />
            </Section>

            <Section id="all-texts" title="All the texts">
                <Alert color="warning" title="Have the translations checked">
                    The Filipino and Bisaya texts were written with care, but a native speaker should review them before a site goes
                    live. They're all in one file,{" "}
                    <Link href={`${REPOSITORY}/blob/main/src/i18n/messages.ts`} external>src/i18n/messages.ts</Link>. Corrections
                    are very welcome.
                </Alert>
                <Table
                    aria-labelledby="all-texts"
                    rowKey="key"
                    striped
                    columns={[
                        { key: "key", header: "Key", width: "24%", render: (row) => <Code>{row.key}</Code> },
                        ...LANGUAGES.map((option) => ({
                            key: option.value,
                            header: option.label,
                            render: (row) => <span lang={option.value}>{row[option.value]}</span>,
                        })),
                    ]}
                    data={ROWS}
                />
            </Section>

            <OnThisPage items={TOC} />
        </Stack>
    );
}
