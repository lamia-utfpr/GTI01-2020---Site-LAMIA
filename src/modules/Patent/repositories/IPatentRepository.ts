import ICreatePatentDTO from '@modules/Patent/DTOs/ICreatePatentDTO';
import Patent from '../infra/typeorm/entities/Patent';

export default interface IPatentRepository {
  create(data: ICreatePatentDTO): Promise<Patent>;
  findById(id: string): Promise<Patent | undefined>;
  findAll(): Promise<Patent[] | undefined>;
}
