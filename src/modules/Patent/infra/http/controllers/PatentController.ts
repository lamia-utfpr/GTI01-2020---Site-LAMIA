import { Request, Response } from 'express';
import PatentRepository from '../../typeorm/repositories/PatentRepository';
// import { container } from 'tsyringe';

export default class PatentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const repository = new PatentRepository();

    const patent = await repository.create({ name, description });

    return response.json(patent);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const repository = new PatentRepository();

    const patents = await repository.findAll();

    return response.json(patents);
  }
}
