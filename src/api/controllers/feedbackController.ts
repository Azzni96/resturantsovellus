
import {Request, Response, NextFunction} from "express";
import { addFeedback, getFeedbackForProduct } from '../models/feedbackModel';
import db from "../../database/db";

export const createfeedback = (req: Request, res: Response, next: NextFunction) :void => {
    try {
      const { productName, comment, rating } = req.body;
      const userId = req.body.userId; // Haetaan käyttäjän ID JWT-tokenista
  
      // Etsi tuotteen ID nimen perusteella
      const productStatement = db.prepare('SELECT id FROM products WHERE name = ?');
      const product = productStatement.get(productName) as { id: number };
  
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
        return;
      }
  
      // Lisää palaute tietokantaan
      const feedbackId = addFeedback(userId, product.id, comment, rating);
  
      res.status(201).json({
        message: 'Feedback added successfully',
        id: feedbackId
      });
    } catch (error) {
      next(error);
    }
  };

  export const listFeedbackForProduct = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { productId } = req.params;
      const feedbacks = getFeedbackForProduct(Number(productId));
      res.status(200).json(feedbacks);
    } catch (error) {
      next(error);
    }
  };
  