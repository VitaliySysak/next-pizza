"use client";

import React from "react";
import { cn } from "@/src/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import { formLoginSchema, formRegisterSchema, TFormLoginValues, TFormRegisterValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Title } from "../../../title";
import Image from "next/image";
import { FormInput } from "../../../checkout-form";
import { Button } from "@/src/components/ui";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { registerUser } from "@/src/lib/actions/register-user";

interface Props {
  className?: string;
  onClose?: VoidFunction;
}

export const RegisterForm: React.FC<Props> = ({ className, onClose }) => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {

    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.success("Successfully registered. Confirm your email", { icon: "✅" });

      onClose?.();
    } catch (error) {
      console.error("Error while execution register-from onSubmit:", error);
      toast.error("Failed to register account", { icon: "❌" });
    }
  };

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <Title text="Register" size="md" className="font-bold" />

        <FormInput name="email" label="E-Mail" required />
        <FormInput name="fullName" label="Full Name" required />
        <FormInput name="password" label="Password" type="password" required />
        <FormInput name="confirmPassword" label="Confirm Password" type="password" required />

        <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
          Register
        </Button>
      </form>
    </FormProvider>
  );
};
