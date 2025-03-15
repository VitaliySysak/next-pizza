"use client";

import React from "react";
import { cn } from "@/src/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import { formLoginSchema, TFormLoginValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Title } from "../../../title";
import Image from "next/image";
import { FormInput } from "../../../checkout-form";
import { Button } from "@/src/components/ui";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

interface Props {
  className?: string;
  onClose?: VoidFunction;
}

export const LoginForm: React.FC<Props> = ({ className, onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!resp?.ok) {
        throw new Error();
      }

      toast.success("You successfully entered in account", { icon: "✅" });

      onClose?.();
    } catch (error) {
      console.error("Error while execution login-from onSubmit:", error);
      toast.error("Failed to enter in account", { icon: "❌" });
    }
  };

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title text="Log in" size="md" className="font-bold" />
            <p className="text-gray-400">Enter email address, to log in</p>
          </div>
          <Image width={50} height={50} src="/assets/images/phone-icon.png" alt="phone-icon" />
        </div>

        <FormInput name="email" label="E-Mail" required />
        <FormInput name="password" label="Password" type="password" required />

        <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
          Enter
        </Button>
      </form>
    </FormProvider>
  );
};
