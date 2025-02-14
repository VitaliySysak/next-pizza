"use client";

import { CheckoutSideBar, Container, Title } from "@/src/components/shared";
import { AddressInfo } from "@/src/components/shared/checkout/address-info";
import { Cart } from "@/src/components/shared/checkout/cart";
import { PersonalInfo } from "@/src/components/shared/checkout/personal-info";
import { useCart } from "@/src/hooks";
import { checkoutFormSchema, CheckoutFormValues } from "@/src/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

export default function Chekout() {
  const { items, loading, totalAmount, addCartItem, updateItemQuantity, removeCartItem } = useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      alert(JSON.stringify(data, null, 2));
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <Container className="mt-5">
      <Title text="Checkout process" className="font-extrabold mb-6 text-[36px]" />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-10">

          {/* Left side */}
          <div className="flex flex-col gap-10 flex-1 mb-20">

            {/* Cart */}
            <Cart items={items} loading={loading} updateItemQuantity={updateItemQuantity} removeCartItem={removeCartItem} />

            {/* Personal data */}
            <PersonalInfo  />

            {/* Delivery address */}
            <AddressInfo />
          </div>

          {/* Right side */}
          <CheckoutSideBar totalAmount={totalAmount} />
        </form>
      </FormProvider>
    </Container>
  );
}
