import { IsBoolean, IsInt, IsString, IsEnum } from 'class-validator';
import { EnumToString } from 'src/helpers/enumToString';
import { AutoMarca } from '../enums';

export class CreateAutoDto {
  @IsString()
  @IsEnum(AutoMarca, {
    message: `Opcion invalida. Las opciones correctas son ${EnumToString(
      AutoMarca,
    )}`,
  })
  marca: string;

  @IsString()
  modelo: string;

  @IsString()
  color: number;

  @IsInt()
  no_pasajeros: number;

  @IsInt()
  no_puertas: number;

  @IsBoolean()
  activo: boolean;

  @IsInt()
  precio: number;
}
