import { Router } from 'express';
import { createfeedback, listFeedbackForProduct } from '../controllers/feedbackController';
import { authenticate } from '../middleware/authMiddleware';

const feedbackRouter = Router();

feedbackRouter.post('/',authenticate, createfeedback);
feedbackRouter.get('/:productId', listFeedbackForProduct);


export default feedbackRouter;
