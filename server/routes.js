import examplesRouter from './api/controllers/examples/router';
import userRouter from './api/controllers/users/router';
import productRouter from './api/controllers/products/router';
import authRouter from './api/controllers/auth/router';
import cors from 'cors';

export default function routes(app) {
  app.use(
    cors(function(req, callback) {
      const corsOptions = { origin: true, credentials: true, exposedHeaders: ["X-Total-Count"] };
      callback(null, corsOptions);
    }),
  );
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/login',authRouter);
  app.use('/api/v1/products', productRouter);
}