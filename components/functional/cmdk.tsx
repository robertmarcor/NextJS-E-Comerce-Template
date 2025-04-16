"use client";

import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Link from "next/link";
import { ROUTES } from "@/data/nav-routes";

function Cmdk() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const ItemLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
      <CommandItem>
        <Link href={href} className="hover:text-primary">
          {children}
        </Link>
      </CommandItem>
    );
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Links">
          {Object.values(ROUTES).map((route) => (
            <ItemLink key={route} href={route}>
              {route}
            </ItemLink>
          ))}
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </CommandDialog>
  );
}

export default Cmdk;
