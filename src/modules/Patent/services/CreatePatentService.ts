import { inject, injectable } from 'tsyringe';
import ICreatePatentDTO from '../DTOs/ICreatePatentDTO';
import Patent from '../infra/typeorm/entities/Patent';
import IPatentRepository from '../repositories/IPatentRepository';

@injectable()
export default class CreatePatentService {
  constructor(
    @inject('PatentRepository')
    private patentRepository: IPatentRepository,
  ) {}

  public async execute({
    name,
    description,
  }: ICreatePatentDTO): Promise<Patent> {
    const patent = await this.patentRepository.create({ name, description });

    return patent;
  }
}
