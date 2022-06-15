import express from 'express';

import productRouter from './src/routes/products.routes';
import userRouter from './src/routes/users.routes';
import ordersRouter from './src/routes/orders.routes';
import loginRouter from './src/routes/login.routes';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(userRouter);
app.use(ordersRouter);
app.use(loginRouter);

export default app;
