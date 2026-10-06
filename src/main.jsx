import "bettergovregiondavaoui/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { SettingsProvider } from "./lib/SettingsProvider.jsx";
import "./site.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <SettingsProvider>
                <App />
            </SettingsProvider>
        </BrowserRouter>
    </StrictMode>,
);
