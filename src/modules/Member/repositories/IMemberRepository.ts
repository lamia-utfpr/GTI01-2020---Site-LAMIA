import Patent from '@modules/Patent/infra/typeorm/entities/Patent';
import ICreateMemberDTO from '../dtos/ICreateMemberDTO';
import Member from '../infra/typeorm/entities/Member';

export default interface IMemberRepository {
  save(data: Member): Promise<Member>;
  create(data: ICreateMemberDTO): Promise<Member>;

  findByEmail(email: string): Promise<Member | undefined>;
  findByLogin(login: string): Promise<Member | undefined>;
  findByEmailOrLogin(input: string): Promise<Member | undefined>;
  findById(id: string): Promise<Member | undefined>;
  findAll(): Promise<Member[] | undefined>;

  findByPatent(patent: Patent): Promise<Member[] | undefined>;

  delete(id: string): Promise<void>;
}
