import IPatentRepository from '@modules/Patent/repositories/IPatentRepository';

import ICreatePatentDTO from '@modules/Patent/DTOs/ICreatePatentDTO';

import Patent from '../../infra/typeorm/entities/Patent';

export default class FakePatentRepository implements IPatentRepository {
  private patents: Patent[] = [];

  public async create(patentData: ICreatePatentDTO): Promise<Patent> {
    const patent = new Patent();

    Object.assign(patent, patentData);

    this.patents.push(patent);

    return patent;
  }

  public async findAll(): Promise<Patent[] | undefined> {
    return this.patents;
  }
}
