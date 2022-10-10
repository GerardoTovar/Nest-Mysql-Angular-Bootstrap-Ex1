import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteAutoDto } from './create-cliente-auto.dto';

export class EditClienteAutoDto extends PartialType(CreateClienteAutoDto) {}
