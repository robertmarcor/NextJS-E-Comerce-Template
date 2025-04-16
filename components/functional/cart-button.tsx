"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";
import { ROUTES } from "@/data/nav-routes";
import { useCart } from "@/context/CartContext";
import { Badge } from "../ui/badge";

function CartButton() {
  const { cart } = useCart();
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Link href={ROUTES.CART}>
        <Button className="size-12 rounded-full relative" size="icon">
          <ShoppingBag className="size-6" />
          {cart.itemCount > 0 && (
            <Badge className="absolute -top-2 -right-2 rounded-full border-1 border-border z-[41]">
              {cart.itemCount}
            </Badge>
          )}
        </Button>
      </Link>
    </div>
  );
}

export default CartButton;
