import ProductController from './controller';
import * as express from 'express';

export default express
  .Router()
  .get('/', ProductController.all)
  .get('/:id', ProductController.byId)
  .post('/', ProductController.create);