import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateTableMembers1609023427629
  implements MigrationInterface {
  name = 'CreateTableMembers1609023427629';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "public"."members" ("id" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(255) NOT NULL, "login" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "passwordHash" character varying(255) NOT NULL, "linkedin" character varying(255), "gitHub" character varying(255), "lattes" character varying(255), "description" character varying(255) DEFAULT 'Estou tendo muito projetos não consegui fazer minha descrição...', "quoteName" character varying(255), "avatar" character varying(255), "patentId" uuid, CONSTRAINT "UQ_3d2e6dad244ad33f4679b520141" UNIQUE ("login"), CONSTRAINT "UQ_0255c8c4924daa02cea03365e18" UNIQUE ("email"), CONSTRAINT "UQ_9dd635466cd92e2506c2596375a" UNIQUE ("linkedin"), CONSTRAINT "UQ_142157b841c25eb4f3f63f12c79" UNIQUE ("gitHub"), CONSTRAINT "UQ_28990df063caac863ff344c0d06" UNIQUE ("lattes"), CONSTRAINT "UQ_039c1f83d695a69880a24106241" UNIQUE ("quoteName"), CONSTRAINT "UQ_9faf85d15ccbc05204ccf71f8be" UNIQUE ("avatar"), CONSTRAINT "PK_33423cc83aa0869b25caff3ab52" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "public"."members" ADD CONSTRAINT "FK_5ca92d53fe6bc9069ea270f45b6" FOREIGN KEY ("patentId") REFERENCES "public"."patents"("id") ON DELETE SET NULL ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."members" DROP CONSTRAINT "FK_5ca92d53fe6bc9069ea270f45b6"`,
    );
    await queryRunner.query(`DROP TABLE "public"."members"`);
  }
}
