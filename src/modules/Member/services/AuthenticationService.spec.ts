import 'reflect-metadata';

import AppError from '@shared/Errors/AppError';
import FakeHashProvider from '@shared/container/providers/HashProvider/Fakes/FakeHashProvider';
import AuthenticationService from './AuthenticationService';
import FakeMemberRepository from '../repositories/Fakes/FakeMemberRepository';

let fakeMemberRepository: FakeMemberRepository;
let authenticationService: AuthenticationService;
let fakeHashProvider: FakeHashProvider;

describe('Authentication', () => {
  beforeEach(() => {
    fakeMemberRepository = new FakeMemberRepository();
    fakeHashProvider = new FakeHashProvider();
    authenticationService = new AuthenticationService(
      fakeMemberRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authenticate with to login', async () => {
    const { member } = await authenticationService.execute({
      login: 'Brainiac',
      password: 'fake',
    });

    expect(member).toHaveProperty('id');
    expect(member.login).toBe('Brainiac');
  });
  it('should be able to authenticate with to email', async () => {
    const { member } = await authenticationService.execute({
      login: 'support@lamia.utfpr.sh.edu.br',
      password: 'fake',
    });

    expect(member).toHaveProperty('id');
    expect(member.login).toBe('Brainiac');
  });
  it('should not be able to authenticate with non exist member', async () => {
    await expect(
      authenticationService.execute({
        login: 'login-not-exist',
        password: 'fake',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
  it('should not be able to authenticate with invalid password', async () => {
    await expect(
      authenticationService.execute({
        login: 'Brainiac',
        password: 'password-wrong',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
