"use server";

import { Prisma } from "@prisma/client";
import { getUserSession } from "../get-user-session";
import { prisma } from "@/prisma/prisma-client";
import { hashSync } from "bcrypt";

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error("User was not found");
    }

    const user = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password ? hashSync(body.password as string, 10) : user?.password,
      },
    });
  } catch (error) {
    console.error("Error while execution actions/update-user-info", error);
    throw error;
  }
}
