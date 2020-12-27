import { Router } from 'express';
import sessionRouter from './session.routes';

const memberRouter = new Router();

memberRouter.use('/', sessionRouter);

export default memberRouter;
