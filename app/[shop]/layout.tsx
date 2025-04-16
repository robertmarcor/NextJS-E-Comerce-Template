import React from "react";
import CartButton from "@/components/functional/cart-button";
type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <>
      <CartButton />
      {children}
    </>
  );
}

export default layout;
