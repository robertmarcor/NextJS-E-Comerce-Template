import React from "react";
import Link from "next/link";
import { siFacebook, siInstagram, siX, siTiktok } from "simple-icons";
import Logo from "@/components/ui/logo";
import BrandIcon from "@/components/ui/brand-icon";
import { infoRoutes } from "@/data/nav-routes";

function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 items-center">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-muted-foreground text-sm text-center">
              © {new Date().getFullYear()} Brand Name. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-center">
            <Link
              href={infoRoutes.contact.href}
              className="text-muted-foreground hover:text-primary text-sm">
              {infoRoutes.contact.label}
            </Link>
            <Link
              href={infoRoutes.shipping.href}
              className="text-muted-foreground hover:text-primary text-sm">
              {infoRoutes.shipping.label}
            </Link>
            <Link
              href={infoRoutes.privacy.href}
              className="text-muted-foreground hover:text-primary text-sm">
              {infoRoutes.privacy.label}
            </Link>
            <Link
              href={infoRoutes.terms.href}
              className="text-muted-foreground hover:text-primary text-sm">
              {infoRoutes.terms.label}
            </Link>
          </div>

          <div className="flex justify-center space-x-4">
            <BrandIcon icon={siFacebook} href="https://www.facebook.com" />
            <BrandIcon icon={siInstagram} href="https://www.instagram.com" />
            <BrandIcon icon={siX} href="https://www.x.com" />
            <BrandIcon icon={siTiktok} href="https://www.tiktok.com" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
