import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export const register = async (req: Request, res: Response): Promise<void> => {
  const user = await authService.registerUser(req.body);
  res
    .status(201)
    .json({ message: "User registered successfully", userId: user.id });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const user = await authService.loginUser(req.body);

  if (!user) {
    res.status(401).json({ message: "Invalid credentials" });
  }

  res.status(200).json({ message: "Login successful", user });
};
