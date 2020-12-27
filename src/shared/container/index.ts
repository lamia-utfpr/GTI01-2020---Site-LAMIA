import { container } from 'tsyringe';

import './providers';

import IPatentRepository from '@modules/Patent/repositories/IPatentRepository';
import PatentRepository from '@modules/Patent/infra/typeorm/repositories/PatentRepository';

import MemberRepository from '@modules/Member/infra/typeorm/repositories/MemberRepository';
import IMemberRepository from '@modules/Member/repositories/IMemberRepository';

container.registerSingleton<IPatentRepository>(
  'PatentRepository',
  PatentRepository,
);

container.registerSingleton<IMemberRepository>(
  'MemberRepository',
  MemberRepository,
);
