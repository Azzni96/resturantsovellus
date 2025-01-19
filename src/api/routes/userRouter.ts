import { Router } from "express";
import { createUser, listUsers } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", listUsers);

export default userRouter;