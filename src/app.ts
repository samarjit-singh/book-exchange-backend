import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import userRoute from "./routes/user.routes";

dotenv.config();

import express from "express";
import cors from "cors";

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
