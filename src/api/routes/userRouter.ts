import { Router } from "express";
import { createUser, listUsers, loginUser } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", listUsers);
userRouter.post("/login", loginUser);

export default userRouter;