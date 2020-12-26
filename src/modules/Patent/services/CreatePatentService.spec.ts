import 'reflect-metadata';

import AppError from '@shared/Errors/AppError';
import CreatePatentService from './CreatePatentService';
import FakePatentRepository from '../repositories/fakes/FakePatentRepository';

let fakePatentRepository: FakePatentRepository;
let createPatentService: CreatePatentService;

describe('CreatePatent', () => {
  beforeEach(() => {
    fakePatentRepository = new FakePatentRepository();
    createPatentService = new CreatePatentService(fakePatentRepository);
  });

  it('should be able create a new patent', async () => {
    const patentWithDescription = await createPatentService.execute({
      name: 'Orientador',
      description: 'Orientador orienta',
    });

    const patentWithoutDescription = await createPatentService.execute({
      name: 'Novato',
    });

    expect(patentWithDescription).toHaveProperty('id');
    expect(patentWithDescription.name).toBe('Orientador');
    expect(patentWithoutDescription.description).toBeUndefined();
    expect(
      patentWithDescription.id !== patentWithoutDescription.id,
    ).toBeTruthy();
  });
  // it('only administrators, coordinators and advisors should be able to create a new patent', async () => {});
  it('should not be able create two patent on the same name', async () => {
    const patent = await createPatentService.execute({
      name: 'Orientador',
    });

    expect(patent).toHaveProperty('id');
    await expect(
      createPatentService.execute({
        name: 'Orientador',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able create a new patent with empty name', async () => {
    await expect(
      createPatentService.execute({
        name: '',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
