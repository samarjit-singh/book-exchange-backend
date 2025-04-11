import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import bookRoutes from "./routes/book.routes";

dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/books", bookRoutes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
