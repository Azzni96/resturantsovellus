import { Router } from "express";
import { createProduct, listProducts } from "../controllers/productController";

const productRouter = Router();

productRouter.post("/", createProduct);
productRouter.get("/", listProducts);

export default productRouter;