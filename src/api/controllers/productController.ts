import { Request, Response, NextFunction } from "express";
import { addProduct, getAllProducts } from "../models/productModel";

export const createProduct = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, price, description, image_url } = req.body;
        if (!name || !price || !image_url || !description) {
            res.status(400).json({message: "Please provide name, price and image_url"});
            return;
        }
        const productId = addProduct(name, price, description, image_url);
        res.status(201).json({message: "Product created successfully", id: productId });
    } catch (error) {
        next(error);
    }   
};

export const listProducts = (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};