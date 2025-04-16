"use client";

import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

import { fetchClientSecret } from "@/app/actions/stripe";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function Checkout() {
  const { cart } = useCart();
  const { user } = useAuth();

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{
          fetchClientSecret: async () => {
            const secret = await fetchClientSecret(cart.items, user?.email);
            if (!secret) throw new Error("Failed to fetch client secret");
            return secret;
          },
        }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
