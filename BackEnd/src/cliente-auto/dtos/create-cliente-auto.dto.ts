import { IsInt, IsString } from 'class-validator';

export class CreateClienteAutoDto {
  @IsString()
  clienteId: string;

  @IsString()
  autoId: string;

  @IsInt()
  precio_compra: number;
}
