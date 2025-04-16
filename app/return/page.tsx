import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

interface Props {
  searchParams: Promise<{ session_id: string }>;
}

export default async function Return({ searchParams }: Props) {
  const { session_id } = await searchParams;

  if (!session_id) throw new Error("Please provide a valid session_id (`cs_test_...`)");

  let session: Stripe.Checkout.Session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items", "payment_intent"],
    });
  } catch (error) {
    console.error("Error retrieving Stripe session:", error);
    return redirect("/error");
  }
  console.log("Retrieved Session Object:", JSON.stringify(session, null, 2));

  const status = session.status;
  const customerEmail = session.customer_details?.email ?? "N/A";

  const collectedInfo = session.collected_information;
  const shippingDetails = collectedInfo?.shipping_details;
  const shippingName = shippingDetails?.name ?? "N/A";
  const stripeAddress = shippingDetails?.address;
  const orderTotal = session.amount_total;
  const currency = session.currency ?? undefined;
  const phone = session.customer_details?.phone ?? undefined;

  // Transform the address to match our component's expected format
  const address = stripeAddress
    ? {
        city: stripeAddress.city ?? undefined,
        country: stripeAddress.country ?? undefined,
        line1: stripeAddress.line1 ?? undefined,
        line2: stripeAddress.line2,
        postal_code: stripeAddress.postal_code ?? undefined,
        state: stripeAddress.state,
      }
    : undefined;

  if (status === "open") {
    console.log("Session is still open, redirecting.");
    return redirect("/");
  }

  if (status === "complete") {
    console.log("Session complete, redirecting to success page with params.");
    // Create query parameters for the success page
    const params = new URLSearchParams({
      email: customerEmail,
      name: shippingName,
      total: orderTotal ? (orderTotal / 100).toFixed(2) : "N/A",
    });

    if (currency) params.append("currency", currency);
    if (phone) params.append("phone", phone);
    if (address) params.append("address", encodeURIComponent(JSON.stringify(address)));

    return redirect(`/return/success?${params.toString()}`);
  }

  console.warn(`Unhandled session status: ${status}, redirecting.`);
  return redirect("/");
}
