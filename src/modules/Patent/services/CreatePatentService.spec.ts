import 'reflect-metadata';

import CreatePatentService from './CreatePatentService';
import FakePatentRepository from '../repositories/fakes/FakePatentRepository';

describe('CreatePatent', () => {
  it('should be able create a new patent', async () => {
    const fakePatentRepository = new FakePatentRepository();
    const createPatentService = new CreatePatentService(fakePatentRepository);

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
  // it('only administrators, coordinators and advisors should be able to create a new patent', () => {});
  // it('should not be able create two patent on the same name', () => {});
  // it('should not be able create a new patent with empty name', () => {});
});
