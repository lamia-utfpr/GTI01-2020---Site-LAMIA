import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) =>
	response.json({ mensagem: 'Hello Word!!! API PORTAL LAMIA' }),
);

export default routes;