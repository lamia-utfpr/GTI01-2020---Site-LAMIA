import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddDefaultMember1609023530535
  implements MigrationInterface {
  name = 'AddDefaultMember1609023530535';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO public.members
      ("id","name","email","passwordHash","linkedin","gitHub","lattes","avatar","officeId","login","description","quoteName","createdAt","updatedAt")
      VALUES
      ('17e1b166-47ce-11eb-b378-0242ac130002','Support Brainiac','support@lamia.utfpr.sh.edu.br','$2a$08$eSoPzUnW51T4AkUE.osL1.3XE6W9xaKVsuRtbgwxRrn6TmK99HCLi',NULL,NULL,NULL,NULL,'97cb5197-9d56-4f1c-aec8-43876b53a942','Brainiac','Sou um ciborgue ou androide extraterrestre. Meu principal inimigo é Superman, e sou responsável por encolher e roubar a Kandor, a capital do planeta natal de Superman, Krypton.','Brainiac','2020-12-02 14:52:57.330','2020-12-03 16:29:43.002');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM public.members WHERE id = '17e1b166-47ce-11eb-b378-0242ac130002';
    `);
  }
}
