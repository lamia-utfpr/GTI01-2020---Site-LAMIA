import ICreateMemberDTO from '../dtos/ICreateMember.dto';
import IOrderMember from '../dtos/IOrderMember.dto';
import { EntityMember } from '../typeorm/entities/member.entity';

export default interface IRepositoryMember {
  createSave(data: ICreateMemberDTO): Promise<EntityMember>;
  updateSave(data: EntityMember): Promise<EntityMember>;
  findById(id: string): Promise<EntityMember | undefined>;
  findByLikeName(
    name: string,
    order?: IOrderMember,
  ): Promise<EntityMember[] | undefined>;
  findAll(order?: IOrderMember): Promise<EntityMember[] | undefined>;
  removeById(id: string): Promise<void>;
}
