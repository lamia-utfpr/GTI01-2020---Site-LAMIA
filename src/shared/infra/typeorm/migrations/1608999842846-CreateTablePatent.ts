import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateTablePatent1608999842846
  implements MigrationInterface {
  name = 'CreateTablePatent1608999842846';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "public"."patents" ("id" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(255) NOT NULL, "description" text, CONSTRAINT "UQ_c6f02e4bed98bb8109fcfd3e0ea" UNIQUE ("name"), CONSTRAINT "PK_d47455ef172dc69a230cddcfa0a" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "public"."patents"`);
  }
}
