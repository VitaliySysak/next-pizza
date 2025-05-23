"use client";

import React from "react";
import { cn } from "@/src/lib/utils";
import { X } from "lucide-react";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { CartItemDetailsImage } from "./cart-item-details/cart-item-details-image";
import { CartItemInfo } from "./cart-item-details/cart-item-info";
import { CartItemDetailsPrice } from "./cart-item-details/cart-item-details-price";
import { CartItemDetailsCountButton } from "./cart-item-details/cart-item-details-count-button";

interface Props extends CartItemProps {
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
  className?: string;
}

export const CheckoutItem: React.FC<Props> = ({
  name,
  price,
  imageUrl,
  quantity,
  details,
  className,
  disabled,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col xl:flex-row xl:items-center justify-between gap-2 xl:gap-0",
        {
          "opacity-50 pointer-events-none": disabled,
        },
        className
      )}>
      <div className="flex items-center gap-5 flex-1">
        <CartItemDetailsImage src={imageUrl} />
        <CartItemInfo name={name} details={details} />
      </div>
      <div className="flex items-center">
        <CartItemDetailsPrice value={price} />

        <div className="flex items-center gap-5 ml-auto xl:ml-20">
          <CartItemDetailsCountButton onClick={onClickCountButton} value={quantity} />
          <button type="button" onClick={onClickRemove}>
            <X className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
