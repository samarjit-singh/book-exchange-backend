import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBookStatus,
  updateBook,
  deleteBook,
  uploadBookImage,
} from "../controllers/book.controller";
import upload from "../middlewares/multer";

const router = Router();

router.post("/create", createBook);
router.get("/all", getAllBooks);
router.get("/:id", getBookById);
router.patch("/:id/status", updateBookStatus);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);
router.post("/:id/image", upload.single("image"), uploadBookImage);

export default router;
