import 'reflect-metadata';

import AppError from '@shared/Errors/AppError';
import FakeHashProvider from '@shared/container/providers/HashProvider/Fakes/FakeHashProvider';
import FakePatentRepository from '@modules/Patent/repositories/fakes/FakePatentRepository';
import CreateMemberService from './CreateMemberService';
import FakeMemberRepository from '../repositories/Fakes/FakeMemberRepository';

let fakeMemberRepository: FakeMemberRepository;
let fakePatentRepository: FakePatentRepository;
let createMemberService: CreateMemberService;
let fakeHashProvider: FakeHashProvider;

describe('CreateMember', () => {
  () => {
    fakeMemberRepository = new FakeMemberRepository();
    fakePatentRepository = new FakePatentRepository();
    fakeHashProvider = new FakeHashProvider();
    createMemberService = new CreateMemberService(
      fakeMemberRepository,
      fakePatentRepository,
      fakeHashProvider,
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be able to "Administrador" create a new member', async () => {
    const member = await createMemberService.execute({
      name: 'John Doe',
      login: 'john',
      email: 'john@test.com',
      patentId: '97cb5197-9d56-4f1c-aec8-43876b53a942',
      loggedMemberId: '17e1b166-47ce-11eb-b378-0242ac130002',
    });

    expect(member).toHaveProperty('id');
    expect(member.login).toBe('john');
  });
  it('should be able to "Coordenador" create a new member', async () => {
    const member = await createMemberService.execute({
      name: 'John Doe',
      login: 'john2',
      email: 'john2@test.com',
      patentId: '97cb5197-9d56-4f1c-aec8-43876b53a942',
      loggedMemberId: '8c521ca2-f25a-4437-8db2-13b24c30717b',
    });

    expect(member).toHaveProperty('id');
    expect(member.login).toBe('john2');
  });
  it('should be able to "Orientador" create a new member', async () => {
    const member = await createMemberService.execute({
      name: 'John Doe',
      login: 'john3',
      email: 'john3@test.com',
      patentId: '97cb5197-9d56-4f1c-aec8-43876b53a942',
      loggedMemberId: '988fb9fb-1407-4b61-9ced-9f01f644083f',
    });

    expect(member).toHaveProperty('id');
    expect(member.login).toBe('john3');
  });
  it('Different patents than "Administrator", "Coordenador" and "Orientador" should not be able to create a new member', async () => {
    await expect(
      createMemberService.execute({
        name: 'John Doe',
        login: 'john3',
        email: 'john3@test.com',
        patentId: '97cb5197-9d56-4f1c-aec8-43876b53a942',
        loggedMemberId: '4366232d-b215-47c0-93d1-1b3ee8f9ce13',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should not be able to create a new member with non exist logged Member', async () => {
    await expect(
      createMemberService.execute({
        name: 'John Doe',
        login: 'john4',
        email: 'john4@test.com',
        patentId: '97cb5197-9d56-4f1c-aec8-43876b53a942',
        loggedMemberId: 'member-not-exist',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should not be able to create a new member with non exist patent', async () => {
    await expect(
      createMemberService.execute({
        name: 'John Doe',
        login: 'john5',
        email: 'john5@test.com',
        patentId: 'patent-not-exits',
        loggedMemberId: '988fb9fb-1407-4b61-9ced-9f01f644083f',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
