
import UserController from './controller';
import * as express from 'express';

export default express
  .Router()
  .get('/', UserController.all)
  .get('/:id', UserController.byId)
  .post('/', UserController.create);