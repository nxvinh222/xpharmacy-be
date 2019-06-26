
import UserController from './controller';
import * as express from 'express';

export default express
  .Router()
  .get('/', UserController.all)
  .post('/', UserController.create);