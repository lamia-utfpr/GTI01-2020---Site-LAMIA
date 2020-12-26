import { getRepository, Repository } from 'typeorm';

import IPatentRepository from '@modules/Patent/repositories/IPatentRepository';

import ICreatePatentDTO from '@modules/Patent/DTOs/ICreatePatentDTO';

import Patent from '../entities/Patent';

export default class PatentRepository implements IPatentRepository {
  private ormRepository: Repository<Patent>;

  constructor() {
    this.ormRepository = getRepository(Patent);
  }

  public async save(patent: Patent): Promise<Patent> {
    return this.ormRepository.save(patent);
  }

  // public async findById(id: string): Promise<Administrador | undefined> {
  //   const administrador = await this.ormRepository.findOne(id);

  //   return administrador;
  // }

  public async create(patentData: ICreatePatentDTO): Promise<Patent> {
    const patent = this.ormRepository.create(patentData);

    await this.save(patent);

    return patent;
  }

  public async findAll(): Promise<Patent[] | undefined> {
    const patent = await this.ormRepository.find({
      order: { name: 'ASC' },
    });

    return patent;
  }
}
