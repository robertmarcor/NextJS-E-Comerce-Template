import React from "react";
import { Button } from "./button";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Button size={"lg"}>LOGO</Button>
    </Link>
  );
}

export default Logo;
