import express, { request, response } from 'express';
import ClassesControllers from './controllers/classes/ClassesController';
import ConnectionsController from './controllers/connections/ConnectionsController';
import AuthController from './controllers/auth/AuthController';

const routes = express.Router();
const classesController = new ClassesControllers();
const connectionsController = new ConnectionsController();
const authController = new AuthController();

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

routes.post('/auth', authController.Auth);

export default routes;