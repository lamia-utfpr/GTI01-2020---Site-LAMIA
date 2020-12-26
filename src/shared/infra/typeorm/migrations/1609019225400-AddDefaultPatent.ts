import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddDefaultPatent1609019225400
  implements MigrationInterface {
  name = 'AddDefaultPatent1609019225400';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO public.patents ("id","name","description","createdAt","updatedAt") VALUES
    ('97cb5197-9d56-4f1c-aec8-43876b53a942', 'Administrator','Standard user for new tests and implementation, has full access to the system.','2020-12-02 14:52:57.248-03','2020-12-02 14:52:57.248-03'),
    ('eefa7be3-6061-471e-abac-e70d45aa3858', 'Coordenador','O Professor Coordenador controla a quantidade de alunos que integram o quadro do laboratório, bem como distribuir horários de uso quando necessário. Gerência o processo seletivo de entrada de Novatos. Intermediar a relação entre o laboratório e universidade.','2020-12-02 14:52:57.248-03','2020-12-02 14:52:57.248-03'),
    ('593dcad5-4893-4709-acd4-97fda354ce40', 'Orientador','Os Professores Orientadores instrui os discentes do LAMIA, garantindo responsabilidade e qualidade dos trabalhos. Captar novos alunos e intermediar a relação entre alunos, laboratório e universidade.Buscar por recursos e materiais necessários para a ampliação e manutenção do LAMIA.','2020-12-02 14:52:57.248-03','2020-12-02 14:52:57.248-03'),
    ('62a964e6-ec93-4dc4-90f4-1007eea26ecb', 'Colaborador','O Professor Colaborador é aquele membro não efetivo do LAMIA e que está vinculado ao laboratório através de pelo menos um projeto em execução ou finalizado','2020-12-02 14:52:57.248-03','2020-12-02 14:52:57.248-03'),
    ('79b1c32d-a356-46fa-b4c9-d0617cbc2f1f', 'Membro','É considerado Membro do laboratório apenas aquele aluno que possui projeto em andamento com pelo menos um Orientador.','2020-12-02 14:52:57.248-03','2020-12-02 14:52:57.248-03'),
    ('6e69c876-6641-4fa7-8127-89ce2cc3c14a', 'Veterano','É considerado Veterano um membro que terminou suas atividades com sucesso e aceitou colaborar indiretamente com o funcionamento do LAMIA.','2020-12-02 14:52:57.248-03','2020-12-02 14:52:57.248-03'),
    ('92eca529-7c46-495a-a158-9dd179981578', 'Novato','Aluno Novato é aquele que ingressou no LAMIA através de processo seletivo está desenvolvendo pré-projeto durante o semestre vigente.','2020-12-02 14:52:57.248-03','2020-12-02 14:52:57.248-03'),
    ('89dfd68c-8eaa-47c1-ad96-cb98593d3fc0', 'TCC','Aluno TCC é aquele que ingressou no laboratório para desenvolvimento de seu trabalho de conclusão de curso.','2020-12-02 14:52:57.248-03','2020-12-02 14:52:57.248-03'),
    ('15731e0e-81ad-4590-80a4-b4168d689d54', 'Alumni','Alumni é um ex-aluno do LAMIA que segue seus passos no mundo trabalho.','2020-12-02 14:52:57-03','2020-12-02 14:52:57-03');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM public.patents WHERE name = 'Administrator';
    `);
    await queryRunner.query(`
      DELETE FROM public.patents WHERE name = 'Coordenador';
    `);
    await queryRunner.query(`
      DELETE FROM public.patents WHERE name = 'Orientador';
    `);
    await queryRunner.query(`
      DELETE FROM public.patents WHERE name = 'Colaborador';
    `);
    await queryRunner.query(`
      DELETE FROM public.patents WHERE name = 'Membro';
    `);
    await queryRunner.query(`
      DELETE FROM public.patents WHERE name = 'Veterano';
    `);
    await queryRunner.query(`
      DELETE FROM public.patents WHERE name = 'Novato';
    `);
    await queryRunner.query(`
      DELETE FROM public.patents WHERE name = 'TCC';
    `);
    await queryRunner.query(`
      DELETE FROM public.patents WHERE name = 'Alumni';
    `);
  }
}
