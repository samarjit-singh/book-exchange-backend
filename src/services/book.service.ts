import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { BookStatus } from "@prisma/client";

export const createBook = async (data: any) => {
  return prisma.book.create({ data });
};

export const getAllBooks = async (query: any) => {
  const filters: any = {};
  if (query.title)
    filters.title = { contains: query.title, mode: "insensitive" };
  if (query.genre)
    filters.genre = { contains: query.genre, mode: "insensitive" };
  if (query.location)
    filters.location = { contains: query.location, mode: "insensitive" };

  return prisma.book.findMany({
    where: filters,
    include: {
      owner: { select: { name: true, email: true } },
    },
  });
};

export const getBookById = async (id: string) => {
  return prisma.book.findUnique({
    where: { id },
    include: {
      owner: { select: { id: true, name: true, email: true, mobile: true } },
    },
  });
};

export const updateBookStatus = async (id: string, status: BookStatus) => {
  return prisma.book.update({
    where: { id },
    data: { status },
  });
};

export const updateBook = async (id: string, data: any) => {
  return prisma.book.update({
    where: { id },
    data,
  });
};

export const deleteBook = async (id: string) => {
  return prisma.book.delete({ where: { id } });
};

export const uploadBookImage = async (
  id: string,
  file: Express.Multer.File | undefined
) => {
  if (!file) throw new Error("No file uploaded");
  const imageUrl = `/uploads/${file.filename}`;
  await prisma.book.update({
    where: { id },
    data: { imageUrl },
  });
  return imageUrl;
};
