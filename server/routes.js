import examplesRouter from './api/controllers/examples/router';
import userRouter from './api/controllers/users/router';
import productRouter from './api/controllers/products/router';
import authRouter from './api/controllers/auth/router';
export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/login',authRouter);
  app.use('/api/v1/products', productRouter);
}