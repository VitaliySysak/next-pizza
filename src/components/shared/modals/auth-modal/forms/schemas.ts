import { z } from "zod";

export const passwordSchema = z.string().min(6, "Enter valid password");

export const formLoginSchema = z.object({
  email: z.string().email(),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z.string().min(2, { message: "Enter full name" }),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, { message: "passwords doesn't match", path: ["confirmPassword"] });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
