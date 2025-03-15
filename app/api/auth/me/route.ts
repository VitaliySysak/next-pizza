import { prisma } from "@/prisma/prisma-client";
import { getUserSession } from "@/src/lib/get-user-session";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getUserSession();

    if (!session) {
      return NextResponse.json({ message: "You not authorize" }, { status: 401 });
    }

    const user = await prisma.user.findFirst({
      where: {
        id: Number(session.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error while execution me/GET:", error);

    return NextResponse.json({ message: "USER_GET Server error" }, { status: 500 });
  }
}
