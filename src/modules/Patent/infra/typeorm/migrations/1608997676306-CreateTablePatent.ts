import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateTablePatent1608997676306
  implements MigrationInterface {
  name = 'CreateTablePatent1608997676306';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "public"."patents" ("id" uuid NOT NULL, "name" character varying(255) NOT NULL, "description" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d47455ef172dc69a230cddcfa0a" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "public"."patents"`);
  }
}
