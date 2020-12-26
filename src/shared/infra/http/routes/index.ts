import { Router } from 'express';

import patentsRoutes from '@modules/Patent/infra/http/routes';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ mensagem: 'Hello Word!!! API PORTAL LAMIA' }),
);

routes.use('/patent', patentsRoutes);

export default routes;
