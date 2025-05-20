"use server";

import { prisma } from "@/prisma/prisma-client";
import { Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";
import { sendEmail } from "../send-email";
import { UserVerification } from "@/src/components/shared/email-templates/user-verification";

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        throw new Error("Email not confirmed");
      }

      throw new Error("User already exist");
    }

    body.fullName, 999;
    
    const createdUser = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        password: hashSync(body.password, 10),
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      },
    });

    await sendEmail(
      createdUser.email,
      "Crustloop Pizza / Confirm registration",
      UserVerification({
        code,
      })
    );
  } catch (error) {
    console.error("Error while execution register-user:", error);
    throw error;
  }
}
