import { Request, Response } from "express";
import { getUser } from "../services/user.service";

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = await getUser(req.params.id);
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};
