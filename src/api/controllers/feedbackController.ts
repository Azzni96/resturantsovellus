import {Request, Response, NextFunction} from "express";
import { addFeedback, getFeedbackForProduct } from '../models/feedbackModel';


export const createFeedback = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId, productId, comment, rating } = req.body;
      const feedbackId = addFeedback(userId, productId, comment, rating);
      res.status(201).json({ message: 'Feedback added successfully', id: feedbackId });
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
  