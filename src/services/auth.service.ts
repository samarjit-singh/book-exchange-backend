import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const registerUser = async (data: any) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser) {
    throw new Error("EMAIL_EXISTS");
  }

  return prisma.user.create({ data });
};

export const loginUser = async (data: any) => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });

  if (!user || user.password !== data.password) {
    return null;
  }

  const { id, name, role } = user;

  return { id, name, role };
};
