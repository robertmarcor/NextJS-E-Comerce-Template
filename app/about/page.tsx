import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Company</h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          We&apos;re passionate about delivering exceptional products and experiences to our
          customers.
        </p>
      </section>

      <Separator className="my-8" />

      {/* Our Story */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2020, our journey began with a simple idea: to create a shopping experience
              that truly puts customers first.
            </p>
            <p className="text-muted-foreground mb-4">
              What started as a small online shop has grown into a thriving marketplace offering a
              wide range of products that enhance our customers&apos; lives.
            </p>
            <p className="text-muted-foreground">
              Through dedication to quality, innovation, and exceptional customer service,
              we&apos;ve built a community of loyal shoppers who trust us for their everyday needs.
            </p>
          </div>
          <div className="bg-muted rounded-lg h-[300px] flex items-center justify-center relative">
            <Image
              src={
                "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Company Image"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <Card className="mb-4">
          <CardContent className="pt-6 space-y-6">
            <h2 className="text-2xl font-bold">Kontaktinformasjon</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mt-1">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Telefon</h3>
                  <p className="text-muted-foreground">+47 999 99 999</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mt-1">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">E-post</h3>
                  <p className="text-muted-foreground">support@domain.no</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <h3 className="font-medium mb-2">Åpningstider</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Mandag - Fredag</div>
                <div>09:00 - 17:00</div>
                <div>Lørdag - Søndag</div>
                <div>09:00 - 15:00</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default AboutPage;
