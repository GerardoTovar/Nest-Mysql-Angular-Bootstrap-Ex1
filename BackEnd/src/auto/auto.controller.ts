import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAutoDto, EditAutoDto } from './dtos';
import { AutoService } from './auto.service';

@Controller('auto')
export class AutoController {
  constructor(private readonly autoService: AutoService) {}

  @Get()
  async getMany() {
    return await this.autoService.getMany();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.autoService.getOne(id);
  }

  @Post()
  CreateOne(@Body() dto: CreateAutoDto) {
    return this.autoService.CreateOne(dto);
  }

  @Put(':id')
  editOne(@Param('id') id: string, @Body() dto: EditAutoDto) {
    return this.autoService.editOne(id, dto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.autoService.deleteOne(id);
  }
}
