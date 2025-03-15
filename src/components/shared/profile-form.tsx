"use client";

import React from "react";
import { cn } from "@/src/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { formRegisterSchema, TFormRegisterValues } from "./modals/auth-modal/forms/schemas";
import { User } from "@prisma/client";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
import { Container } from "./container";
import { Title } from "./title";
import { FormInput } from "./checkout-form";
import { Button } from "../ui";
import { updateUserInfo } from "@/src/lib/actions/update-user-info";

interface Props {
  className?: string;
  data: User;
}

export const ProfileForm: React.FC<Props> = ({ className, data }) => {
  const form = useForm({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.success("Data updated successfully", { icon: "✅" });
    } catch (error) {
      console.error("Error while execution profile onSubmit:", error);
      toast.error("Error while updating personal data", { icon: "❌" });
    }
  };

  const onClickSignOut = () => {
    signOut({
      callbackUrl: "/",
    });
  };

  return (
    <Container className={cn("my-10", className)}>
      <Title text={`Personal data | #${data.id}`} size="md" className="font-bold" />

      <FormProvider {...form}>
        <form className="flex flex-col gap-5 w-96 mt-10" onSubmit={form.handleSubmit(onSubmit)}>
          <FormInput name="email" label="E-Mail" required />
          <FormInput name="fullName" label="Full name" required />

          <FormInput name="password" label="password" type="password" required />
          <FormInput name="confirmPassword" label="confirm password" type="password" required />

          <Button disabled={form.formState.isSubmitting} className="text-base mt-10" type="submit">
            Save
          </Button>

          <Button
            onClick={onClickSignOut}
            variant="secondary"
            disabled={form.formState.isSubmitting}
            className="text-base"
            type="button"
          >
            Exit
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
