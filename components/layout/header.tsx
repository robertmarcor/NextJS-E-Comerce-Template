import React from "react";
import Logo from "@/components/ui/logo";
import Nav from "@/components/layout/nav";
import { Separator } from "@/components/ui/separator";
function SiteHeader() {
  return (
    <React.Fragment>
      <header className="bg-background">
        <div className="flex items-center gap-4 text-center h-20 md:mr-24 mx-4">
          <Logo />
          <Nav />
        </div>
      </header>
      <Separator />
    </React.Fragment>
  );
}

export default SiteHeader;
