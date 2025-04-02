import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./fonts.css";
import "./index.css";
import App from "./App.tsx";
import { LanguageProvider } from "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
