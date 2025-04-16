"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { ROUTES } from "@/data/nav-routes";
import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage?: number;
  imageSrc: string;
  stripeRef?: string;
}

// Demo products - these would come from a database in a real application
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Summer Silk Dress",
    description:
      "Lightweight and breathable silk dress, perfect for summer occasions and evening events.",
    price: 129,
    discountPercentage: 15,
    imageSrc:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
    stripeRef: "price_1REPrEIOzjucuxfSkl50xqkN",
  },
  {
    id: "2",
    name: "Classic Leather Bag",
    description: "Timeless leather bag with pearl buttons, suitable for any season.",
    price: 299,
    imageSrc:
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=2563&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stripeRef: "price_1REPuCIOzjucuxfScU46Bx8L",
  },
  {
    id: "3",
    name: "Designer Sunglasses",
    description: "UV protective designer sunglasses with a timeless shape and premium finish.",
    price: 199,
    discountPercentage: 30,
    imageSrc:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
    stripeRef: "price_1REPwYIOzjucuxfSutBlJDU2",
  },
];

function ShopHomePage() {
  const { addToCart } = useCart();
  const [alertOpen, setAlertOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedProduct(product);
    setAlertOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-background">
        <div className="container px-4 py-16 md:py-24 mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Hero Text Content */}
          <div className="flex-1 space-y-6 max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              TRENDY FASHION COLLECTIONS
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Fashion create
              <br /> good lifestyle <span className="inline-block">🇬🇧</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed">
              A world-class trendy fashion collections. An American designer well known for her
              luxe-inspired lifestyle Men&apos;s and women&apos;s iconic styles.
            </p>

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="rounded-full">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative z-10 w-full md:max-w-[500px] md:mx-auto">
              <div className="absolute -top-6 right-0 bg-primary text-primary-foreground rounded-full px-4 py-2 font-semibold text-sm shadow-lg z-10">
                30% OFF
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-primary border-l-transparent border-r-transparent"></div>
              </div>

              <div className="relative w-full aspect-[4/6] min-h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Fashion model with shopping bags"
                  fill
                  className="rounded-3xl object-cover"
                  priority
                  sizes="100vw"
                />
                {/* User profile badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-background rounded-full p-2 shadow-lg">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="pr-2">
                    <p className="text-xs font-semibold">Tanvim Amalia</p>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Latest trend badge */}
              <div className="absolute top-10 -right-4 md:right-10 bg-card shadow-lg rounded-lg p-2 md:p-3 z-20 rotate-6 scale-75 md:scale-100">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="relative size-8 md:size-12 rounded-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
                      alt="Latest trend"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-medium text-muted-foreground">
                      Latest Women
                    </p>
                    <p className="text-xs md:text-sm font-semibold">Formal Fashion</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-10 h-20 w-20 bg-secondary/30 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/3 right-0 h-32 w-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section with Zig-Zag Layout */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our carefully curated selection of premium items, designed for those with discerning
              taste.
            </p>
          </div>

          <div className="space-y-24">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-16 items-center`}>
                {/* Product Image */}
                <div className="flex-1 relative w-full">
                  <div className="bg-gradient-to-b from-background to-muted/50 rounded-3xl p-6 md:p-10 h-[400px] relative shadow-md">
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      fill
                      className="object-cover rounded-2xl"
                    />

                    {product.discountPercentage && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1">
                        {product.discountPercentage}% OFF
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>

                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold">
                      $
                      {product.discountPercentage
                        ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
                        : product.price.toFixed(2)}
                    </span>

                    {product.discountPercentage && (
                      <span className="text-muted-foreground line-through">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    <Button className="rounded-full" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="rounded-full">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-12 max-w-2xl mx-auto bg-background/80 rounded-lg shadow-md my-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is your product authentic?</AccordionTrigger>
            <AccordionContent>Yes, all products are authentic and original.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Where are you based?</AccordionTrigger>
            <AccordionContent>We are based in Norway.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Delivery Time?</AccordionTrigger>
            <AccordionContent>
              You can expect your order to be delivered within 3-5 business days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Added to Cart Alert Dialog */}
      <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Added to Cart</AlertDialogTitle>
            <AlertDialogDescription>
              {addedProduct && (
                <>
                  <span className="font-medium">{addedProduct.name}</span> has been added to your
                  cart.
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Continue Shopping</AlertDialogAction>
            <Link href={ROUTES.CART}>
              <Button variant="outline">View Cart</Button>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ShopHomePage;
