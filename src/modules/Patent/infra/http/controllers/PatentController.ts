import CreatePatentService from '@modules/Patent/services/CreatePatentService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import PatentRepository from '../../typeorm/repositories/PatentRepository';

export default class PatentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createPatent = container.resolve(CreatePatentService);

    const patent = await createPatent.execute({ name, description });

    return response.json(patent);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const repository = new PatentRepository();

    const patents = await repository.findAll();

    return response.json(patents);
  }
}
