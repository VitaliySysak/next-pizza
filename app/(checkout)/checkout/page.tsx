"use client";

import { CheckoutItem, CheckoutSideBar, Container, Title, WhiteBlock } from "@/src/components/shared";
import { Input } from "@/src/components/ui";
import { Textarea } from "@/src/components/ui/textarea";
import { PizzaSize, PizzaType } from "@/src/constants/pizza";
import { useCart } from "@/src/hooks";
import { getCartItemDetails } from "@/src/lib";

export default function Chekout() {
  const { items, loading, totalAmount, addCartItem, updateItemQuantity, removeCartItem } = useCart();

  return (
    <Container className="mt-5">
      <Title text="Checkout process" className="font-extrabold mb-6 text-[36px]" />

      <div className="flex gap-10">

        {/* Left side */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
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

          <WhiteBlock title="2. Personal data">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Name" />
              <Input name="lastName" className="text-base" placeholder="LastName" />
              <Input name="email" className="text-base" placeholder="E-mail" />
              <Input name="phone" className="text-base" placeholder="Phone number" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Delivery address">
            <div className="flex flex-col gap-5">
              <input type="address" className="text-base" placeholder="Enter address..." />
              <Textarea rows={5} className="text-base" placeholder="Comment for order" />
            </div>
          </WhiteBlock>
        </div>

        {/* Right side */}
        <CheckoutSideBar totalAmount={totalAmount} />
      </div>
    </Container>
  );
}
