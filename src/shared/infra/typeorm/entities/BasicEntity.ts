import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export default class BasicEntity {
  @PrimaryColumn({ type: 'uuid', name: 'id' })
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(id?: string) {
    // Object.assign(this, props);

    if (!id) {
      this.id = uuidv4();
    }
  }
}
