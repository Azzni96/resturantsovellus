import express from 'express';
import userRouter from './api/routes/userRouter';
import productRouter from './api/routes/productRouter';
import feedbackRouter from './api/routes/feedbackRouter';
import './database/setup'; // Alustaa tietokannan

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/feedback', feedbackRouter);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
