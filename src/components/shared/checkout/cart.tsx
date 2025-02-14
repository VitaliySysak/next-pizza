import React from "react";
import { WhiteBlock } from "../white-block";
import { CheckoutItem } from "../checkout-item";
import { PizzaSize, PizzaType } from "@/src/constants/pizza";
import { getCartItemDetails } from "@/src/lib";
import { CartStateItem } from "@/src/lib/get-cart-details";
import { CheckoutItemSkeleton } from "../checkout-item-skeleton";

interface Props {
  className?: string;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number, type: "plus" | "minus") => void;
  removeCartItem: (id: number) => void;
}

export const Cart: React.FC<Props> = ({ className, items, loading, updateItemQuantity, removeCartItem }) => {
  const [firstLoading, setFirstLoading] = React.useState(loading);
  
  React.useEffect(() => {
    if (!loading) {
      setFirstLoading(false)
    }
  }, [loading]);

  return (
    <WhiteBlock title="1. Cart">
      <div className="flex flex-col gap-5">
        {firstLoading
          ? [...Array(4)].map((_, index) => <CheckoutItemSkeleton key={index} />)
          : items.map((item) => (
              <CheckoutItem
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                details={getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                disabled={item.disabled}
                onClickCountButton={(type) => updateItemQuantity(item.id, item.quantity, type)}
                onClickRemove={() => removeCartItem(item.id)}
              />
            ))}
      </div>
    </WhiteBlock>
  );
};
