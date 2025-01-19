import { Request, Response, NextFunction } from "express";
import { addUser, getAllUsers, findUserByEmail} from "../models/userModel";
import jwt from "jsonwebtoken";

export const createUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;
        const userId = addUser(name, email, password);
        res.status(201).json({message: "User created successfully", id: userId });
    } catch (error) {
        next(error);
    }   
};

export const listUsers = (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const Secret_key = "ravintolaratingapp";

export const loginUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const user = findUserByEmail(email);
        if (!user) {
            res.status(401).json({ message: "Invalid email or password" });
            return;
        }
        if (user.password !== password) {
            res.status(401).json({ message: "Invalid email or password" });
            return;
        }
        const token = jwt.sign({ userId: user.id }, Secret_key);
        res.status(200).json({ message: "Login successful", token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
        next(error);
    }
}