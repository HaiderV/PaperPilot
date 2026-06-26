import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { OcrToolPage } from "./pages/OcrToolPage";
import { OutputPage } from "./pages/OutputPage";
import { FaqPage } from "./pages/FaqPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "ocr-tool", Component: OcrToolPage },
      { path: "output", Component: OutputPage },
      { path: "faq", Component: FaqPage },
      { path: "privacy", Component: PrivacyPage },
      { path: "terms", Component: TermsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
