"use client";

import { CheckoutSideBar, Container, Title } from "@/src/components/shared";
import { AddressInfo } from "@/src/components/shared/checkout/address-info";
import { Cart } from "@/src/components/shared/checkout/cart";
import { PersonalInfo } from "@/src/components/shared/checkout/personal-info";
import { useCart } from "@/src/hooks";
import { createOrder } from "@/src/lib/actions/order.actions";
import { checkoutFormSchema, CheckoutFormValues } from "@/src/lib/utils";
import { Api } from "@/src/services/api-cient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Chekout() {
  const { items, loading, totalAmount, updateItemQuantity, removeCartItem } = useCart();
  const { data: session } = useSession();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: session?.user.name || "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  React.useEffect(() => {
    async function fetchUserInfo() {
      const user = await Api.auth.getMe();
      const [firstName, lastName] = user.fullName.split(" ");

      form.setValue("firstName", firstName);
      form.setValue("lastName", lastName);
      form.setValue("email", user.email);
    }
    if (session) {
      fetchUserInfo();
    }
  }, [session]);

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      const url = await createOrder(data, items);

      toast.success("Order created successfully! Redirect to payment...", { icon: "✅" });

      if (url) {
        location.href = url;
      }
    } catch (error) {
      toast.error("Faliled to create an order", { icon: "❌" });
      console.error(error);
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
            <Cart
              items={items}
              loading={loading}
              updateItemQuantity={updateItemQuantity}
              removeCartItem={removeCartItem}
            />

            {/* Personal data */}
            <PersonalInfo loading={loading} />

            {/* Delivery address */}
            <AddressInfo loading={loading} />
          </div>

          {/* Right side */}
          <CheckoutSideBar totalAmount={totalAmount} loading={loading} />
        </form>
      </FormProvider>
    </Container>
  );
}
