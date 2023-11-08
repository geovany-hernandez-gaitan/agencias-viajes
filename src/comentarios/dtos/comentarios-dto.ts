import {
  IsNumber,
  IsString,
  IsBoolean,
  IsNumberString,
  IsOptional,
} from 'class-validator';

export class ComentarioDTO {
  @IsNumberString()
  @IsOptional()
  id: number;

  @IsNumber()
  @IsOptional()
  puntuacion: number;

  @IsString()
  @IsOptional()
  comentario: string;

  @IsBoolean()
  @IsOptional()
  aprobado: boolean;

  @IsBoolean()
  @IsOptional()
  visible: boolean;
}
