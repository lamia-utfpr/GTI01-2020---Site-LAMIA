import ICreatePatentDTO from '@modules/Patent/DTOs/ICreatePatentDTO';
import Patent from '../infra/typeorm/entities/Patent';

export default interface IPatentRepository {
  create(data: ICreatePatentDTO): Promise<Patent>;
  findAll(): Promise<Patent[] | undefined>;
}
