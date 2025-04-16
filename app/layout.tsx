import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Cmdk from "@/components/functional/cmdk";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Botique",
  description: "Botique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} `}>
      <body
        className={`font-sans antialiased  bg-gradient-to-br from-rose-500/10 via-transparent to-teal-500/10`}>
        <AuthProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Cmdk />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
