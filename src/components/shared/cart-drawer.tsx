"use client";

import React from "react";
import { Button, Sheet } from "../ui";
import { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "@/src/lib";
import { PizzaSize, PizzaType } from "@/src/constants/pizza";
import Image from "next/image";
import { Title } from "./title";
import { cn } from "@/src/lib/utils";
import { useCart } from "@/src/hooks";

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <div className={cn("flex flex-col h-full", !totalAmount && "justify-center")}>
          {totalAmount > 0 && (
            <SheetHeader>
              <SheetTitle>
                {items.length === 1 ? (
                  <span className="font-bold">{`${items.length} item`}</span>
                ) : (
                  <span className="font-bold">{`${items.length} items`}</span>
                )}
                &nbsp;in the cart
              </SheetTitle>
            </SheetHeader>
          )}

          {!totalAmount && (
            <div className="flex flex-col justify-center items-center w-72 mx-auto">
              <Image src={"/assets/images/empty-box.png"} alt="Empty cart" width={120} height={120} />
              <Title size="sm" text="Cart is empty" className="text-center font-bold my-2" />
              <p className="text-center text-neutral-500 mb-5">Add at least one pizza to take an order</p>

              <SheetClose>
                <Button className="w-56 h-12 text-base" size="lg">
                  <ArrowLeft className="w-5 mr-2" />
                  Go back
                </Button>
              </SheetClose>
            </div>
          )}

          {/* Items */}
          {totalAmount > 0 && (
            <>
              <div className="-mx-6 mt-5 overflow-auto flex-1">
                {items.map((item) => (
                  <CartDrawerItem
                    key={item.id}
                    id={item.id}
                    imageUrl={item.imageUrl}
                    details={getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)}
                    disabled={item.disabled}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    onClickCountButton={(type) => updateItemQuantity(item.id, item.quantity, type)}
                    onClickRemove={() => removeCartItem(item.id)}
                    className="mb-2"
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

                  <Link href="/checkout">
                    <Button type="submit" className="w-full h-12 text-base">
                      Comfirm order
                      <ArrowRight className="w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </SheetFooter>
            </>
          )}
        </div>
        <SheetDescription hidden></SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
