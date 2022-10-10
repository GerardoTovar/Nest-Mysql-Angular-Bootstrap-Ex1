import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto, EditClienteDto } from './dtos';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async getMany() {
    return await this.clienteRepository.find();
  }

  async getOne(id: string) {
    const cliente = await this.clienteRepository.findOne({ where: { id } });
    if (!cliente) throw new NotFoundException('El Cliente no existe');
    return cliente;
  }

  async CreateOne(dto: CreateClienteDto) {
    const cliente = this.clienteRepository.create(dto as any);
    return await this.clienteRepository.save(cliente);
  }

  async editOne(id: string, dto: EditClienteDto) {
    const cliente = await this.clienteRepository.findOne({ where: { id } });
    if (!cliente) throw new NotFoundException('El Cliente no existe');
    const editedCliente = Object.assign(cliente, dto);
    return await this.clienteRepository.save(editedCliente);
  }
  async deleteOne(id: string) {
    return await this.clienteRepository.delete(id);
  }
}
