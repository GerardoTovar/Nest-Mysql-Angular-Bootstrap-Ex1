import { ClienteAuto } from 'src/cliente-auto/entities/cliente-auto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'autos' })
export class Auto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 30 })
  marca: string;

  @Column({ type: 'varchar', length: 30 })
  modelo: string;

  @Column({ type: 'varchar', length: 30 })
  color: number;

  @Column({ type: 'int' })
  no_pasajeros: number;

  @Column({ type: 'int' })
  no_puertas: number;

  @Column({ type: 'bool', default: true })
  activo: boolean;

  @Column({ type: 'int' })
  precio: number;

  @OneToMany((type) => ClienteAuto, (clienteAuto) => clienteAuto.auto)
  clienteAuto: ClienteAuto[];
}
