import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Patent from '@modules/Patent/infra/typeorm/entities/Patent';
import BasicEntity from '@shared/infra/typeorm/entities/BasicEntity';

@Entity('members', { schema: 'public' })
export default class Members extends BasicEntity {
  @Column('character varying', { name: 'name', length: 255 })
  name: string;

  @Column('character varying', { name: 'login', unique: true, length: 255 })
  login: string;

  @Column('character varying', {
    name: 'email',
    unique: true,
    length: 255,
  })
  email: string;

  @Column('character varying', { name: 'passwordHash', length: 255 })
  passwordHash: string;

  @Column('character varying', {
    name: 'linkedin',
    nullable: true,
    unique: true,
    length: 255,
  })
  linkedin: string | null;

  @Column('character varying', {
    name: 'gitHub',
    nullable: true,
    unique: true,
    length: 255,
  })
  gitHub: string | null;

  @Column('character varying', {
    name: 'lattes',
    nullable: true,
    unique: true,
    length: 255,
  })
  lattes: string | null;

  @Column('character varying', {
    name: 'description',
    nullable: true,
    length: 255,
    default: () =>
      "'Estou tendo muito projetos não consegui fazer minha descrição...'",
  })
  description: string | null;

  @Column('character varying', {
    name: 'quoteName',
    nullable: true,
    unique: true,
    length: 255,
  })
  quoteName: string | null;

  @Column('character varying', {
    name: 'avatar',
    nullable: true,
    unique: true,
    length: 255,
  })
  avatar: string | null;

  @ManyToOne(() => Patent, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'officeId', referencedColumnName: 'id' }])
  office: Patent;
}
