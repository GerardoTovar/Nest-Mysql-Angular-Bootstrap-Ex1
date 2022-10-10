import { Auto } from 'src/auto/entities/auto.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'cliente-auto' })
export class ClienteAuto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  clienteId: number;

  @Column()
  autoId: number;

  @Column({ type: 'int' })
  precio_compra: number;

  @CreateDateColumn({ type: 'timestamp', nullable: false })
  fecha_compra: Date;

  @ManyToOne((type) => Cliente, (cliente) => cliente.clienteAuto)
  cliente: Cliente;

  @ManyToOne((type) => Auto, (auto) => auto.clienteAuto)
  auto: Auto;
}
