import { Router } from 'express';
import { createFeedback, listFeedbackForProduct } from '../controllers/feedbackController';

const feedbackRouter = Router();

feedbackRouter.post('/', createFeedback);
feedbackRouter.get('/:productId', listFeedbackForProduct);

export default feedbackRouter;
