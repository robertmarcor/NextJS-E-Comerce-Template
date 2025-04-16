"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Minus, Plus, Trash, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/data/nav-routes";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  // Ensure cart.items exists with a default empty array if undefined
  const cartItems = cart?.items || [];
  const subtotal = cart?.subtotal || 0;
  const shipping = cartItems.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto py-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Cart Items</CardTitle>
                <CardDescription>
                  {cart?.itemCount || 0} {(cart?.itemCount || 0) === 1 ? "item" : "items"} in your
                  cart
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead aria-label="Actions"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.product.id}>
                        <TableCell className="font-medium flex items-center gap-2">
                          <div className="w-12 h-12 bg-secondary rounded-md flex items-center justify-center relative text-sm text-muted-foreground overflow-hidden">
                            {item.product.imageSrc ? (
                              <Image
                                src={item.product.imageSrc}
                                alt={item.product.name}
                                fill
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              "IMG"
                            )}
                          </div>
                          <span>{item.product.name}</span>
                        </TableCell>
                        <TableCell>${item.product.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-r-none"
                              onClick={() =>
                                updateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                              }
                              aria-label="Decrease quantity">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              type="number"
                              className="h-8 w-12 rounded-none text-center"
                              value={item.quantity}
                              min={1}
                              readOnly
                            />
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-l-none"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              aria-label="Increase quantity">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>${(item.product.price * item.quantity).toFixed(2)}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive"
                            onClick={() => removeFromCart(item.product.id)}>
                            <Trash className="h-4 w-4 mr-1" />
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  <Link href={ROUTES.SHOP}>Continue Shopping</Link>
                </Button>
                <Button variant="ghost" className="text-destructive" onClick={clearCart}>
                  Clear Cart
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Link href={ROUTES.CHECKOUT}>Proceed to Checkout</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <Card className="text-center p-8">
          <div className="mb-4 text-muted-foreground">
            <ShoppingBag className="mx-auto h-16 w-16" />
          </div>
          <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">
            {"Looks like you haven't added anything to your cart yet."}
          </p>
          <Link href={ROUTES.SHOP}>
            <Button>Start Shopping</Button>
          </Link>
        </Card>
      )}
    </div>
  );
}

export default Cart;
