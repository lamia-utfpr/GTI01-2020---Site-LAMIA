import BasicEntity from '@shared/infra/typeorm/entities/BasicEntity';
import { Column, Entity } from 'typeorm';

@Entity('patents', { schema: 'public' })
export default class Patent extends BasicEntity {
  @Column('character varying', { name: 'name', length: 255, unique: true })
  name: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;
}
