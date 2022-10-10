import { IsArray, IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsInt()
  edad?: number;

  @IsString()
  sexo: string;

  @IsString()
  direccion: string;
}
