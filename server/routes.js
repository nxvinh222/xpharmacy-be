import examplesRouter from './api/controllers/examples/router';
import userRouter from './api/controllers/users/router';
import productRouter from './api/controllers/products/router';
import authRouter from './api/controllers/auth/router';
import uploadRouter from './api/controllers/imageUploads/router';
import auth from './api/controllers/auth/controller';
import cors from 'cors';

export default function routes(app) {
  app.use(
    cors(function(req, callback) {
      const corsOptions = { origin: true, credentials: true, exposedHeaders: ["X-Total-Count"] };
      callback(null, corsOptions);
    }),
  );
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/users',auth.verify , userRouter);
  app.use('/api/v1/imageUploads', uploadRouter)
  app.use('/api/v1/auth',authRouter);
  app.use('/api/v1/products',auth.verify, productRouter);
  // app.get('/api/v1/login', (req, res) => {
  //   res.json({a:"aaaa"});
    
  // });
}