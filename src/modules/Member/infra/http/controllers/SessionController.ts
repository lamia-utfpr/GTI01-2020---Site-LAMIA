import AuthenticationService from '@modules/Member/services/AuthenticationService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { login, password } = request.body;

    const sessionStart = container.resolve(AuthenticationService);

    const { member, token } = await sessionStart.execute({
      login,
      password,
    });

    return response.json({ member, token });
  }
}
