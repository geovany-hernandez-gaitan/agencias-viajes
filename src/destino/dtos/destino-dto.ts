import { IsNumber, IsOptional, IsString } from 'class-validator';

export class DestinoDto {
  @IsNumber()
  id?: number;

  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsOptional() // Indicamos que el campo es opcional
  @IsString()
  imagen?: string;

  @IsNumber()
  precio: number;

  @IsNumber()
  descuento: number;

  @IsNumber()
  precioFinal: number;
}
