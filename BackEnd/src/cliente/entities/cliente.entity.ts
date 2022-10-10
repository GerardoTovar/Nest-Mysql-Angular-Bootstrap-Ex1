import { ClienteAuto } from 'src/cliente-auto/entities/cliente-auto.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'clientes' })
export class Cliente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 20 })
  nombre: string;

  @Column({ type: 'varchar', length: 20 })
  apellido!: string;

  @Column({ type: 'int' })
  edad?: number;

  @Column({ type: 'varchar', length: 1 })
  sexo!: string;

  @Column({ type: 'varchar', length: 100 })
  direccion!: string;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  fecha_registro!: Date;

  @OneToMany((type) => ClienteAuto, (clienteAuto) => clienteAuto.cliente)
  clienteAuto: ClienteAuto[];
}
