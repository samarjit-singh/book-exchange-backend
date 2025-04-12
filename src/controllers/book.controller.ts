import { Request, Response } from "express";
import * as bookService from "../services/book.service";

export const createBook = async (req: Request, res: Response) => {
  const book = await bookService.createBook(req.body);
  res
    .status(201)
    .json({ message: "Book listed successfully", bookId: book.id });
};

export const getAllBooks = async (req: Request, res: Response) => {
  const books = await bookService.getAllBooks(req.query);
  res.json(books);
};

export const getBookById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const book = await bookService.getBookById(req.params.id);
  if (!book) {
    res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
};

export const updateBookStatus = async (req: Request, res: Response) => {
  await bookService.updateBookStatus(req.params.id, req.body.status);
  res.json({ message: "Book status updated" });
};

export const updateBook = async (req: Request, res: Response) => {
  const book = await bookService.updateBook(req.params.id, req.body);
  res.json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
  await bookService.deleteBook(req.params.id);
  res.json({ message: "Book deleted successfully" });
};

export const uploadBookImage = async (req: Request, res: Response) => {
  const imageUrl = await bookService.uploadBookImage(req.file);
  res.json({ message: "Image uploaded", imageUrl });
};
