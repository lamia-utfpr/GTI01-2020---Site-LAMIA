import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('patents', { schema: 'public' })
export default class Patent {
  @PrimaryColumn({ type: 'uuid', name: 'id' })
  id: string;

  @Column('character varying', { name: 'name', length: 255 })
  name: string;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(props: Omit<Patent, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuidv4();
    }
  }
}
