import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";

type AuthConfig = {
  redirect?: boolean;
  required?: boolean;
};

export async function auth(
  config: AuthConfig = { required: true, redirect: true }
) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) {
    if (!config.required) return null;
    if (config.redirect) {
      redirect("/");
    }
  }
  try {
    const dbUser = await prisma.user.findUnique({
      where: {
        email: user.email || "",
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    });
    if (!dbUser) {
      const newUser = await prisma.user.create({
        data: {
          id: user.id,
          email: user.email || "",
          name: user.given_name
            ? `${user.given_name} ${user.family_name}`
            : "no name",
          role: "Teacher",
        },
        select: {
          id: true,
          email: true,
          name: true,
          createdAt: true,
        },
      });
      return newUser;
    }
    return dbUser;
  } catch (error) {
    console.error(error);
    if (!config.required) return null;
    redirect("/");
  }
}
