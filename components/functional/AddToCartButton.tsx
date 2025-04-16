"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface AddToCartButtonProps {
  product: Product;
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export function AddToCartButton({
  product,
  variant = "default",
  size = "default",
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setIsAdding(false);
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleAddToCart}
      disabled={isAdding}
      className="flex items-center gap-2">
      {isAdding ? "Adding..." : "Add to Cart"}
    </Button>
  );
}
