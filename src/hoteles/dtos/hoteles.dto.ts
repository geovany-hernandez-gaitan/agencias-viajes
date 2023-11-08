import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class HotelsDto {
  @IsOptional()
  @IsNumberString()
  id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  description?: string;

  @IsString()
  @IsOptional()
  servises?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  address?: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  phone?: number;
}
