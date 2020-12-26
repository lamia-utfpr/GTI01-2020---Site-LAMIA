import { container } from 'tsyringe';

import './providers';

import IPatentRepository from '@modules/Patent/repositories/IPatentRepository';
import PatentRepository from '@modules/Patent/infra/typeorm/repositories/PatentRepository';

container.registerSingleton<IPatentRepository>(
  'PatentRepository',
  PatentRepository,
);
