import { EntityRepository, getRepository, Repository, Like } from 'typeorm';
import ICreateMemberDTO from '../../dtos/ICreateMember.dto';
import IOrderMember from '../../dtos/IOrderMember.dto';
import IRepositoryMember from '../../repositories/IRepositoryMember';
import { EntityMember } from '../entities/member.entity';

@EntityRepository(EntityMember)
export class RepositoryMember
  extends Repository<RepositoryMember>
  implements IRepositoryMember {
  private ormRepository: Repository<EntityMember>;

  constructor() {
    super();
    this.ormRepository = getRepository(EntityMember);
  }

  public async createSave(data: ICreateMemberDTO): Promise<EntityMember> {
    const Member = this.ormRepository.create(data);

    return this.ormRepository.save(Member);
  }

  public async updateSave(data: EntityMember): Promise<EntityMember> {
    return this.ormRepository.save(data);
  }

  public async findById(id: string): Promise<EntityMember | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async findByLikeName(
    name: string,
    order?: IOrderMember,
  ): Promise<EntityMember[] | undefined> {
    return this.ormRepository.find({
      where: { name: Like(`%${name}%`) },
      order,
    });
  }

  public async findAll(
    order?: IOrderMember,
  ): Promise<EntityMember[] | undefined> {
    return this.ormRepository.find({ order });
  }

  public async removeById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
