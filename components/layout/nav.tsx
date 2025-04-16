"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, User } from "lucide-react";
import {
  SheetTrigger,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavLinks from "@/components/functional/nav-links";
import Login from "../functional/login";
import { useCart } from "@/context/CartContext";
import { Cart, CartItem } from "@/lib/types";

function Nav() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      {!isMobile && (
        <React.Fragment>
          <NavLinks pathname={pathname} className="flex items-center gap-4" />
          <Login className="ml-auto" />
        </React.Fragment>
      )}
      <MobileNav pathname={pathname} cart={cart} />
    </React.Fragment>
  );
}

interface NavProps {
  pathname: string;
  cart: Cart;
}

function MobileNav({ pathname, cart }: NavProps) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const cartItems = cart?.items || [];
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-5 right-5 z-40">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="rounded-full size-12">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className="border-l border-neutral-100 p-0">
          <div className="flex flex-col h-full">
            <SheetHeader className="p-6 border-b border-neutral-100">
              <SheetTitle className="text-xl font-medium">Brand Name</SheetTitle>
            </SheetHeader>

            <div className="flex-1 overflow-auto py-6 px-6">
              {isLoginOpen ? (
                <div className="space-y-4">
                  <Button variant="outline" onClick={() => setIsLoginOpen(false)} className="mb-4">
                    Back to menu
                  </Button>
                  <h3 className="text-lg font-medium">Account</h3>
                  <div className="space-y-2">
                    <SheetClose asChild>
                      <Login />
                    </SheetClose>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="py-2 mb-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2 text-neutral-600"
                      onClick={() => setIsLoginOpen(true)}>
                      <User className="h-4 w-4" />
                      Account
                    </Button>
                  </div>
                  <NavLinks pathname={pathname} className="flex flex-col gap-4" />
                </div>
              )}
            </div>

            <SheetFooter className="px-6 py-4 border-t border-neutral-100">
              <div className="w-full space-y-4">
                {itemCount > 0 && (
                  <div className="space-y-3">
                    <p className="text-sm font-medium">Your Cart</p>
                    <div className="space-y-2">
                      {cartItems.map((item: CartItem) => (
                        <div key={item.product.id} className="flex justify-between text-sm">
                          <span>
                            {item.quantity} × {item.product.name}
                          </span>
                          <span>${item.product.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <SheetClose asChild>
                  <Button className="w-full gap-2" size="lg">
                    <ShoppingBag className="h-4 w-4" />
                    Cart ({itemCount})
                  </Button>
                </SheetClose>
              </div>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
export default Nav;
