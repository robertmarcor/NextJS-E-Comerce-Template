"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Cart, CartItem, Product } from "../lib/types";

interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const defaultCart: Cart = {
  items: [],
  subtotal: 0,
  itemCount: 0,
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>(defaultCart);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart !== defaultCart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Calculate subtotal and item count
  const calculateCartTotals = (items: CartItem[]): { subtotal: number; itemCount: number } => {
    return items.reduce(
      (totals, item) => {
        return {
          subtotal: totals.subtotal + item.product.price * item.quantity,
          itemCount: totals.itemCount + item.quantity,
        };
      },
      { subtotal: 0, itemCount: 0 }
    );
  };

  // Add a product to the cart
  const addToCart = (product: Product, quantity = 1) => {
    setCart((prevCart) => {
      // Ensure items exists with a default empty array if undefined
      const items = prevCart?.items || [];
      const existingItemIndex = items.findIndex((item) => item.product.id === product.id);

      let updatedItems: CartItem[];

      if (existingItemIndex !== -1) {
        // Product already in cart, update quantity
        updatedItems = [...items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
      } else {
        // New product, add to cart
        updatedItems = [...items, { product, quantity }];
      }

      const { subtotal, itemCount } = calculateCartTotals(updatedItems);

      return {
        items: updatedItems,
        subtotal,
        itemCount,
      };
    });
  };

  // Remove a product from the cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      // Ensure items exists with a default empty array if undefined
      const items = prevCart?.items || [];
      const updatedItems = items.filter((item) => item.product.id !== productId);

      const { subtotal, itemCount } = calculateCartTotals(updatedItems);

      return {
        items: updatedItems,
        subtotal,
        itemCount,
      };
    });
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) => {
      // Ensure items exists with a default empty array if undefined
      const items = prevCart?.items || [];
      const updatedItems = items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );

      const { subtotal, itemCount } = calculateCartTotals(updatedItems);

      return {
        items: updatedItems,
        subtotal,
        itemCount,
      };
    });
  };

  // Clear the cart
  const clearCart = () => {
    setCart(defaultCart);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
