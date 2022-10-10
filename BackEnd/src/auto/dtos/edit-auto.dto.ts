import { PartialType } from '@nestjs/mapped-types';
import { CreateAutoDto } from './create-auto.dto';

export class EditAutoDto extends PartialType(CreateAutoDto) {}
