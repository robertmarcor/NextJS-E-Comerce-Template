"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export function CartWidget() {
  const { cart } = useCart();
  const itemCount = cart?.itemCount || 0;

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center justify-center p-2 text-foreground hover:text-primary transition-colors">
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 inline-flex items-center justify-center h-5 w-5 text-xs font-medium text-background bg-primary rounded-full">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
