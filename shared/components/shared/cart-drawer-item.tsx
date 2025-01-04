import React from "react";
import { cn } from "@/shared/lib/utils";
import { CartItemDetailsImage } from "./cart-item-details/cart-item-details-image";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { CartItemInfo } from "./cart-item-details/cart-item-info";
import { CountButton } from "./count-button";
import { CartItemDetailsPrice } from "./cart-item-details/cart-item-details-price";
import { Trash2Icon } from "lucide-react";

interface Props extends CartItemProps {
  onClickCountButton?: (type: "plus" | "minus") => void;
  onClickRemove?: () => void;
  className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({
  id,
  imageUrl,
  name,
  price,
  quantity,
  details,
  className,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div className={cn("flex bg-white p-5 gap-6", className)}>
      <CartItemDetailsImage src={imageUrl} />
      <div className="flex-1 ">
        <CartItemInfo name={name} details={details} />

        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton onClick={onClickCountButton} value={quantity} />

          <div className="flex items-center gap-3">
            <CartItemDetailsPrice value={price} />
            <Trash2Icon onClick={onClickRemove} className="text-gray-400 cursor-pointer hover:text-gray-600" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
