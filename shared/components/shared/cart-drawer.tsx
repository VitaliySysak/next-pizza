"use client";

import React from "react";
import { Button, Sheet } from "../ui";
import { SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { useCartStore } from "@/shared/store";
import { getCartItemDetails } from "@/shared/lib";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  // const [totalAmount, fetchCartItems, items] = useCartStore((state) => [state.totalAmount, state.fetchCartItems, state.items]);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);
  const items = useCartStore((state) => state.items);


  React.useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            <span className="font-bold">3 items in the cart</span>
          </SheetTitle>
        </SheetHeader>

        {/* Items */}
        <div className="-mx-6 mt-5 overflow-auto flex-1">
          {items.map((item) => (
            <CartDrawerItem
              key={item.id}
              id={item.id}
              imageUrl={item.imageUrl}
              details={
                item.pizzaSize && item.pizzaType
                  ? getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)
                  : ""
              }
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Total
                <div className="flex-1 border-b boreder-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">${totalAmount}</span>
            </div>

            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base">
                Comfirm order
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
        <SheetDescription hidden></SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
