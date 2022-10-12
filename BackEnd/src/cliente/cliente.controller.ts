import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateClienteDto, EditClienteDto } from './dtos';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  async getMany() {
    return await this.clienteService.getMany();
  }

  /**
   *  El ParseIntPipe hcae una convercion a entero.
   *  Si no puede manda un error de regreso al cliente.
   *  es un middleware
   * @Get(':id')
   * getOne(@Param('id', ParseIntPipe) id: string) {
   *  return this.clienteService.getOne(id);
   * }
   */

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.clienteService.getOne(id);
  }

  @Post()
  CreateOne(@Body() dto: CreateClienteDto) {
    return this.clienteService.CreateOne(dto);
  }

  @Put(':id')
  editOne(@Param('id') id: string, @Body() dto: EditClienteDto) {
    return this.clienteService.editOne(id, dto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.clienteService.deleteOne(id);
  }
}
