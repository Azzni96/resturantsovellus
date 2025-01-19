import { Request, Response, NextFunction } from "express";
import { addUser, getAllUsers} from "../models/userModel";


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

