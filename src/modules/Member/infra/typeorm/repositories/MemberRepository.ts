import { getRepository, Repository } from 'typeorm';

import IMemberRepository from '@modules/Member/repositories/IMemberRepository';

import ICreateMemberDTO from '@modules/Member/DTOs/ICreateMemberDTO';

import Patent from '@modules/Patent/infra/typeorm/entities/Patent';
import Member from '../entities/Member';

export default class MemberRepository implements IMemberRepository {
  private ormRepository: Repository<Member>;

  constructor() {
    this.ormRepository = getRepository(Member);
  }

  public async save(member: Member): Promise<Member> {
    return this.ormRepository.save(member);
  }

  public async create(memberData: ICreateMemberDTO): Promise<Member> {
    const member = this.ormRepository.create(memberData);

    await this.save(member);

    return member;
  }

  public async findByEmail(email: string): Promise<Member | undefined> {
    const member = await this.ormRepository.findOne({
      where: { email },
    });

    return member;
  }

  public async findByLogin(login: string): Promise<Member | undefined> {
    const member = await this.ormRepository.findOne({
      where: { login },
    });

    return member;
  }

  public async findByEmailOrLogin(input: string): Promise<Member | undefined> {
    const member = await this.ormRepository.findOne({
      where: { email: input, login: input },
    });

    return member;
  }

  public async findById(id: string): Promise<Member | undefined> {
    const member = await this.ormRepository.findOne(id);

    return member;
  }

  public async findAll(): Promise<Member[] | undefined> {
    const members = await this.ormRepository.find();

    return members;
  }

  public async findByPatent(patent: Patent): Promise<Member[] | undefined> {
    const member = await this.ormRepository.find({
      where: { patent },
    });

    return member;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
