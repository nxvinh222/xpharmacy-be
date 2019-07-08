import authController from "./controller";
import * as express from 'express';

export default express
    .Router()
    .get('/',authController.GetInfo)
    .post('/', authController.Login);

