import React from "react";
import { cn } from "@/shared/lib/utils";
import { CartItemDetailsImage } from "./cart-item-details/cart-item-details-image";

interface Props {
  imageUrl: string;
  className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({ className, imageUrl }) => {
  return (
    <div className={cn("flex bg-white p-5 gap-6", className)}>
      <CartItemDetailsImage src={imageUrl} />
    </div>
  );
};
