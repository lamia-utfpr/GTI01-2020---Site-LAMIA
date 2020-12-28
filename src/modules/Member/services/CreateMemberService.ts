import Member from '@modules/Member/infra/typeorm/entities/Member';
import AppError from '@shared/Errors/AppError';
import { inject, injectable } from 'tsyringe';
import IHashProvider from '@shared/container/providers/HashProvider/models/IHashProvider';
import IPatentRepository from '@modules/Patent/repositories/IPatentRepository';
import IMemberRepository from '../repositories/IMemberRepository';
import ICreateMemberDTO from '../DTOs/ICreateMemberDTO';

interface IRequest extends ICreateMemberDTO {
  loggedMemberId: string;
}

@injectable()
export default class CreateMemberService {
  constructor(
    @inject('MemberRepository')
    private memberRepository: IMemberRepository,

    @inject('PatentRepository')
    private patentRepository: IPatentRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    login,
    name,
    email,
    patentId,
    loggedMemberId,
  }: IRequest): Promise<Member> {
    const members = await this.memberRepository.findAll();
    console.log(members);

    const loggedMember = await this.memberRepository.findById(loggedMemberId);

    if (!loggedMember) {
      throw new AppError('Apenas para membros autenticados', 403);
    }

    const patentAllowed = ['Administrador', 'Coordenador', 'Orientador'].find(
      patent => loggedMember.patent.name === patent,
    );

    if (!patentAllowed) {
      throw new AppError(
        'Apenas Administradores, Coordenadores e Orientadores podem cadastrar um novo membro',
        403,
      );
    }

    const patent = await this.patentRepository.findById(patentId);

    if (!patent) {
      throw new AppError('Patente não encontrada', 401);
    }

    const existEmail = await this.memberRepository.findByEmail(email);

    if (existEmail) {
      throw new AppError('Email já cadastrado', 401);
    }

    const existLogin = await this.memberRepository.findByLogin(login);

    if (existLogin) {
      throw new AppError('Login já cadastrado', 401);
    }

    const newMember = await this.memberRepository.create({
      login,
      name,
      email,
      patentId,
    });

    return newMember;
  }
}
