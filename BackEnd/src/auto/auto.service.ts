import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAutoDto, EditAutoDto } from './dtos';
import { Auto } from './entities/auto.entity';

@Injectable()
export class AutoService {
  constructor(
    @InjectRepository(Auto)
    private autoRepository: Repository<Auto>,
  ) {}

  async getMany() {
    return await this.autoRepository.find();
  }

  async getOne(id: string) {
    const auto = await this.autoRepository.findOne({ where: { id } });
    if (!auto) throw new NotFoundException('El Auto no existe');
    return auto;
  }

  async CreateOne(dto: CreateAutoDto) {
    const auto = this.autoRepository.create(dto as any);
    return await this.autoRepository.save(auto);
  }

  async editOne(id: string, dto: EditAutoDto) {
    const auto = await this.autoRepository.findOne({ where: { id } });
    if (!auto) throw new NotFoundException('El Auto no existe');
    const editedAuto = Object.assign(auto, dto);
    return await this.autoRepository.save(editedAuto);
  }
  async deleteOne(id: string) {
    return await this.autoRepository.delete(id);
  }
}
