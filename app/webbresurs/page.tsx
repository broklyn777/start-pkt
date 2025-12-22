// app/webbresurs/page.tsx
// Route: /webbresurs

import type { Metadata } from "next";
import WebbresursVscode from "./webbresurs-vscode";

export const metadata: Metadata = {
  title: "Webbresurs – VS Code sök & navigation",
  description:
    "Lathund för smart sök och navigation i VS Code på macOS: hitta text i projektet, definitioner, referenser och Next.js-routes snabbt.",
};

export default function Page() {
  return <WebbresursVscode />;
}
