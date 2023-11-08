import { IsNumber, IsOptional, IsString } from 'class-validator';

export class VuelosDto {
  @IsNumber()
  id?: number;

  @IsString()
  aerolinea: string;

  @IsString()
  origen: string;

  @IsOptional() // Indicamos que el campo es opcional
  @IsString()
  fecha_salida: number;

  @IsNumber()
  fecha_llegada: number;

  @IsNumber()
  duracion: number;

  @IsNumber()
  precio: number;
}
