import { Router } from 'express';

import patentsRoutes from '@modules/Patent/infra/http/routes';
import membersRoutes from '@modules/Member/infra/http/routes';

const routes = Router();

routes.get('/', (request, response) =>
  response.json({ mensagem: 'Hello Word!!! API PORTAL LAMIA' }),
);

routes.use('/members', membersRoutes);
routes.use('/patents', patentsRoutes);

export default routes;
