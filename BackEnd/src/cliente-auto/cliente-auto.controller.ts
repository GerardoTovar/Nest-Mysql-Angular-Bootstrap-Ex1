import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateClienteAutoDto, EditClienteAutoDto } from './dtos';
import { ClienteAutoService } from './cliente-auto.service';

@Controller('cliente-auto')
export class ClienteAutoController {
  constructor(private readonly clienteAutoService: ClienteAutoService) {}

  @Get()
  async getMany() {
    const data = await this.clienteAutoService.getMany();
    return {
      message: 'Peticion Correcta',
      data,
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.clienteAutoService.getOne(id);
  }

  @Post()
  CreateOne(@Body() dto: CreateClienteAutoDto) {
    return this.clienteAutoService.CreateOne(dto);
  }

  @Put(':id')
  editOne(@Param('id') id: string, @Body() dto: EditClienteAutoDto) {
    return this.clienteAutoService.editOne(id, dto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.clienteAutoService.deleteOne(id);
  }
}
