import Link from "next/link";
import React from "react";
import type { SimpleIcon } from "simple-icons";

type Props = {
  icon: SimpleIcon;
  href?: string;
};

function BrandIcon({ icon, href }: Props) {
  return (
    <Link
      href={href ?? "#"}
      className="text-muted-foreground hover:text-primary"
      aria-label={icon.title}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor">
        <title>{icon.title}</title>
        <path d={icon.path} />
      </svg>
    </Link>
  );
}

export default BrandIcon;
