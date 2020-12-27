import ICreateMemberDTO from '@modules/Member/DTOs/ICreateMemberDTO';
import Member from '@modules/Member/infra/typeorm/entities/Member';
import IMemberRepository from '@modules/Member/repositories/IMemberRepository';
import Patent from '@modules/Patent/infra/typeorm/entities/Patent';

export default class FakeMemberRepository implements IMemberRepository {
  private members: Member[] = [
    {
      id: '17e1b166-47ce-11eb-b378-0242ac130002',
      login: 'Brainiac',
      name: 'Support Brainiac',
      email: 'support@lamia.utfpr.sh.edu.br',
      passwordHash: 'fake',
      linkedin: null,
      gitHub: null,
      lattes: null,
      description: null,
      quoteName: null,
      avatar: null,
      patent: {
        id: '97cb5197-9d56-4f1c-aec8-43876b53a942',
        name: 'Administrator',
        description: null,
        createdAt: new Date(2015, 4, 3),
        updatedAt: new Date(2015, 4, 3),
      },
      createdAt: new Date(2015, 4, 3),
      updatedAt: new Date(2015, 4, 3),
    },
  ];

  public async save(member: Member): Promise<Member> {
    const memberIndex = this.members.findIndex(
      (memberFilter: Member) => memberFilter.id === member.id,
    );

    this.members[memberIndex] = member;

    return member;
  }

  public async create(memberData: ICreateMemberDTO): Promise<Member> {
    const member = new Member();
    Object.assign(member, memberData);

    this.members.push(member);

    return member;
  }

  public async findByEmail(email: string): Promise<Member | undefined> {
    const member = this.members.find(
      (memberFilter: Member) => memberFilter.email === email,
    );
    return member;
  }

  public async findByLogin(login: string): Promise<Member | undefined> {
    const member = this.members.find(
      (memberFilter: Member) => memberFilter.email === login,
    );
    return member;
  }

  public async findByEmailOrLogin(input: string): Promise<Member | undefined> {
    const member = this.members.find(
      (memberFilter: Member) =>
        memberFilter.email === input || memberFilter.login === input,
    );
    return member;
  }

  public async findById(id: string): Promise<Member | undefined> {
    const member = this.members.find(
      (memberFilter: Member) => memberFilter.id === id,
    );
    return member;
  }

  public async findAll(): Promise<Member[] | undefined> {
    return this.members;
  }

  public async findByPatent(patent: Patent): Promise<Member[] | undefined> {
    const members = this.members.filter(
      (memberFilter: Member) => memberFilter.patent.id === patent.id,
    );

    return members;
  }

  public async delete(id: string): Promise<void> {
    const members = this.members.filter(
      (memberFilter: Member) => memberFilter.id !== id,
    );

    this.members = members;
  }
}
