"use server";

import { headers } from "next/headers";
import { Product } from "@/lib/types";

import { stripe } from "@/lib/stripe";

interface CheckoutItem {
  product: Product;
  quantity: number;
}

export async function fetchClientSecret(items: CheckoutItem[] = [], email?: string) {
  const origin = (await headers()).get("origin");

  // If no items provided, use a default item (for testing only)
  const lineItems =
    items.length > 0
      ? items.map((item) => ({
          price: item.product.stripeRef,
          quantity: item.quantity,
        }))
      : [
          {
            price: "price_1RE3NrIOzjucuxfSBQVxgNSx", // Default price for testing
            quantity: 1,
          },
        ];

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    customer_email: email,
    line_items: lineItems,
    currency: "nok",
    mode: "payment",
    billing_address_collection: "required",
    shipping_address_collection: {
      allowed_countries: ["NO", "SE", "DK", "FI", "IS"],
    },
    phone_number_collection: {
      enabled: true,
    },
    return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  return session.client_secret;
}
