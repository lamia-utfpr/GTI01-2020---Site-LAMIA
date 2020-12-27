import authConfig from '@config/auth';
import Member from '@modules/Member/infra/typeorm/entities/Member';
import AppError from '@shared/Errors/AppError';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';
import IMemberRepository from '../repositories/IMemberRepository';

interface IRequest {
  login: string;
  password: string;
}

interface IResponse {
  member: Member;
  token: string;
}

@injectable()
export default class AuthenticationService {
  constructor(
    @inject('MemberRepository')
    private memberRepository: IMemberRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ login, password }: IRequest): Promise<IResponse> {
    const member = await this.memberRepository.findByEmailOrLogin(login);

    if (!member) {
      throw new AppError('Email/Login ou senha inválido', 401);
    }

    if (!(await this.hashProvider.compareHash(password, member.passwordHash))) {
      throw new AppError('Email ou senha inválido', 401);
    }

    const { secret = '', expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: member.id,
      expiresIn,
    });

    return { member, token };
  }
}
