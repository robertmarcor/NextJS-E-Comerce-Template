"use client";

import { Toaster } from "sonner";
import { PgCardsSection } from "./cards";
import { PgButtonsSection } from "./buttons";
import { PgSwitchesSection } from "./switches";
import { PgBadgesSection } from "./badges";
import { PgInputsSection } from "./inputs";
import { PgPopoversSection } from "./popovers";
import { PgToastsSection } from "./toasts";
import { PgFormsSection } from "./forms";
import { PgTabsSection } from "./tabs";
import ColorPalette from "./colors";
export default function PlaygroundPage() {
  return (
    <div className="container py-10 space-y-12 px-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">UI Components Playground</h1>
        <p className="text-muted-foreground">A showcase of UI components and their variants</p>
      </div>

      <ColorPalette />
      <PgCardsSection />
      <PgButtonsSection />
      <PgSwitchesSection />
      <PgBadgesSection />
      <PgInputsSection />
      <PgPopoversSection />
      <PgToastsSection />
      <PgFormsSection />
      <PgTabsSection />

      <Toaster />
    </div>
  );
}
