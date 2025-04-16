import { navRoutes } from "@/data/nav-routes";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavProps {
  pathname: string;
  className?: string;
}

function NavLinks({ pathname, className }: NavProps) {
  return (
    <ul className={cn(className)}>
      {navRoutes.map((item) => (
        <li key={item.label} className="p-2 group">
          <Link
            href={item.href}
            className={cn(
              "relative text-xl text-shadow-2xs",
              "group-hover:text-primary transition-all duration-300",
              pathname === item.href && "text-primary font-medium"
            )}>
            {item.label}
            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
              )}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
