import { Router } from 'express';
import PatentController from '../controllers/PatentController';

const patentRouter = Router();
const patentController = new PatentController();

patentRouter.post('/', patentController.create);
patentRouter.get('/', patentController.index);

export default patentRouter;
