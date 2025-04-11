import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUser = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      mobile: true,
      books: true,
    },
  });
};
