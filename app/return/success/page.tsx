"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Confetti from "react-confetti";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Mail, ShoppingBag, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface OrderDetails {
  customerEmail?: string;
  phone?: string;
  shippingName?: string;
  address?: {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string | null;
    postal_code?: string;
    state?: string | null;
  };
  orderTotal?: string;
  currency?: string;
}

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    customerEmail: "N/A",
    shippingName: "N/A",
    phone: "N/A",
  });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [confettiActive, setConfettiActive] = useState(true);
  const [orderNumber, setOrderNumber] = useState("");
  const [orderDate, setOrderDate] = useState("");

  useEffect(() => {
    // Parse data from URL parameters or use defaults
    try {
      let addressData = undefined;
      const addressParam = searchParams.get("address");
      if (addressParam) {
        try {
          addressData = JSON.parse(decodeURIComponent(addressParam));
        } catch (e) {
          console.error("Failed to parse address data:", e);
        }
      }

      setOrderDetails({
        customerEmail: searchParams.get("email") || "N/A",
        shippingName: searchParams.get("name") || "N/A",
        phone: searchParams.get("phone") || "N/A",
        orderTotal: searchParams.get("total") || undefined,
        currency: searchParams.get("currency") || undefined,
        address: addressData,
      });
    } catch (error) {
      console.error("Error setting order details:", error);
    }

    // Set dimensions for confetti
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Generate order number and date on client side to avoid hydration issues
    setOrderNumber(`ORD-${Math.floor(100000 + Math.random() * 900000)}`);
    setOrderDate(new Date().toLocaleDateString());

    // Stop confetti after 5 seconds
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  const { customerEmail, shippingName, phone, address, orderTotal, currency } = orderDetails;

  return (
    <div className="bg-background">
      {confettiActive && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}

      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Order is Complete!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Thank you for your purchase! {"We've"} received your order and are processing it right
            away. A confirmation email will be sent to {customerEmail}.
          </p>
        </div>

        <Card className="mb-8 border-green-200 shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5 text-green-600" />
              Order Summary
            </h2>
            <div className="space-y-3 divide-y">
              {orderNumber && (
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Order Number:</span>
                  <span className="font-medium">{orderNumber}</span>
                </div>
              )}
              {orderDate && (
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{orderDate}</span>
                </div>
              )}
              {orderTotal && (
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-medium">
                    {orderTotal} {currency?.toUpperCase()}
                  </span>
                </div>
              )}
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{customerEmail}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Shipping To:</span>
                <span className="font-medium">{shippingName}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {address && (
          <Card className="mb-8 border-green-200 shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-green-600" />
                Shipping Address
              </h2>
              <div className="space-y-1 text-muted-foreground">
                {address.line1 && (
                  <p>
                    <span className="font-medium">Address:</span> {address.line1}
                  </p>
                )}
                {address.line2 && (
                  <p>
                    <span className="font-medium">Address2:</span> {address.line2}
                  </p>
                )}
                <p>
                  <span className="font-medium">ZIP:</span>{" "}
                  {[address.city, address.state, address.postal_code].filter(Boolean).join(", ")}
                </p>
                {address.country && (
                  <p>
                    <span className="font-medium">Country:</span> {address.country}
                  </p>
                )}
                {phone && (
                  <p>
                    <span className="font-medium">Phone:</span> {phone}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <Button asChild className="bg-green-600 hover:bg-green-700 w-full md:w-auto">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild className="w-full md:w-auto">
            <Link href="/account/orders">View Order History</Link>
          </Button>
        </div>

        <div className="text-center border-t border-gray-200 pt-8">
          <p className="text-gray-600 mb-2">
            If you have any questions, please contact our customer support team.
          </p>
          <a
            href="mailto:orders@example.com"
            className="flex items-center justify-center text-green-600 hover:text-green-700 font-medium">
            <Mail className="h-4 w-4 mr-2" />
            orders@example.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          Loading order details...
        </div>
      }>
      <OrderSuccessContent />
    </Suspense>
  );
}
