"use client";

import Link from "next/link";
import { PgBadgesSection } from "./playground/badges";
import { PgButtonsSection } from "./playground/buttons";
import { PgCardsSection } from "./playground/cards";
import { PgFormsSection } from "./playground/forms";
import { PgInputsSection } from "./playground/inputs";
import { PgPopoversSection } from "./playground/popovers";
import { PgSwitchesSection } from "./playground/switches";
import { PgTabsSection } from "./playground/tabs";
import { PgToastsSection } from "./playground/toasts";
import ColorPalette from "./playground/colors";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function RootPage() {
  return (
    <div className="flex flex-col px-12 py-10">
      <Card className="max-w-7xl w-full mx-auto bg-gradient-to-br from-violet-300 to-teal-100 border-0 shadow-lg">
        <CardHeader className="text-center relative z-10">
          <h1 className="text-4xl font-bold cursor-pointer">
            <Link href="/shop" className="hover:text-primary transition-colors">
              Go to Shop Template
            </Link>
          </h1>
          <p className="text-muted-foreground mt-2">
            Template for an e-commerce website with, totally free to use
          </p>
        </CardHeader>
        <CardContent className="relative z-10">
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
              },
            }}
            className="flex justify-center gap-8 rounded-lg p-4 overflow-hidden">
            <div className="space-y-2">
              {["shadcn/ui", "tailwind v4", "framer-motion"].map((feature, index) => (
                <ul key={feature} className="flex items-center">
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    className="text-sm flex">
                    <Check className="h-4 w-4 mr-2 text-rose-500" />
                    {feature}
                  </motion.li>
                </ul>
              ))}
            </div>
            <div className="space-y-2">
              {["nextjs", "typescript", "supabase", "google single tap"].map((feature, index) => (
                <ul key={feature} className="flex items-center">
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.5,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    className="text-sm flex">
                    <Check className="h-4 w-4 mr-2 text-teal-500" />
                    {feature}
                  </motion.li>
                </ul>
              ))}
            </div>
          </motion.div>
        </CardContent>
      </Card>

      <section className="*:my-12 max-w-7xl mx-auto bg-background/80 px-12 py-4 rounded-lg my-4 shadow-lg">
        <h2 className="text-2xl font-bold">Some Layout Stuff</h2>
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
      </section>
    </div>
  );
}
