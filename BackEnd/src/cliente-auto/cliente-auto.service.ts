import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteAutoDto, EditClienteAutoDto } from './dtos';
import { ClienteAuto } from './entities/cliente-auto.entity';

@Injectable()
export class ClienteAutoService {
  constructor(
    @InjectRepository(ClienteAuto)
    private clienteAutoRepository: Repository<ClienteAuto>,
  ) {}

  async getMany() {
    return await this.clienteAutoRepository.find();
  }

  async getOne(id: string) {
    const compra = await this.clienteAutoRepository.findOne({ where: { id } });
    if (!compra) throw new NotFoundException('La Compra no existe');
    return compra;
  }

  async CreateOne(dto: CreateClienteAutoDto) {
    const compra = this.clienteAutoRepository.create(dto as any);
    return await this.clienteAutoRepository.save(compra);
  }

  async editOne(id: string, dto: EditClienteAutoDto) {
    const compra = await this.clienteAutoRepository.findOne({ where: { id } });
    if (!compra) throw new NotFoundException('La Compra no existe');
    const editedCompra = Object.assign(compra, dto);
    return await this.clienteAutoRepository.save(editedCompra);
  }
  async deleteOne(id: string) {
    return await this.clienteAutoRepository.delete(id);
  }
}
