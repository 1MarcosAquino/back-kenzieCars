import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1692374980721 implements MigrationInterface {
    name = 'Initial1692374980721'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "street" character varying(45) NOT NULL, "number" character varying(10) NOT NULL, "city" character varying(20) NOT NULL, "state" character varying(2) NOT NULL, "cep" character varying(7) NOT NULL, "updatedAt" date NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "REL_95c93a584de49f0b0e13f75363" UNIQUE ("userId"), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "imagens" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "path" text NOT NULL, "adsId" uuid, CONSTRAINT "PK_7422c88c17289e80e789ce8819c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" text NOT NULL, "adsId" uuid, "userId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ads" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(45) NOT NULL, "brand" character varying(15) NOT NULL, "year" integer NOT NULL, "fuel" integer NOT NULL, "value" integer NOT NULL, "description" text NOT NULL, "miles" integer NOT NULL, "color" character varying(30) NOT NULL, "model" character varying(20) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, "userId" uuid, "commentsId" uuid, CONSTRAINT "PK_a7af7d1998037a97076f758fc23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(45) NOT NULL, "lastName" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "announcer" boolean DEFAULT false, "password" character varying(120) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_95c93a584de49f0b0e13f753630" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "imagens" ADD CONSTRAINT "FK_7cb2c8828243a5f49f40da33352" FOREIGN KEY ("adsId") REFERENCES "ads"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_8fc33be983c6d605ae09e551931" FOREIGN KEY ("adsId") REFERENCES "ads"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ads" ADD CONSTRAINT "FK_e72da72588dc5b91427a9adda71" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ads" ADD CONSTRAINT "FK_d21425e2c30e84a15e5dcc3a0e5" FOREIGN KEY ("commentsId") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP CONSTRAINT "FK_d21425e2c30e84a15e5dcc3a0e5"`);
        await queryRunner.query(`ALTER TABLE "ads" DROP CONSTRAINT "FK_e72da72588dc5b91427a9adda71"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_8fc33be983c6d605ae09e551931"`);
        await queryRunner.query(`ALTER TABLE "imagens" DROP CONSTRAINT "FK_7cb2c8828243a5f49f40da33352"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_95c93a584de49f0b0e13f753630"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "ads"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "imagens"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
