import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class BookingsDto {
  @IsOptional()
  @IsNumberString()
  id?: number;

  @IsDate()
  @IsNotEmpty()
  initialDate?: Date;

  @IsDate()
  @IsNotEmpty()
  finalDate?: Date;

  @IsNumber()
  @IsNotEmpty()
  total?: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  @Max(10)
  peoplesNumber?: number;

  // @IsOptional()
  // @IsNumber()
  // @IsNotEmpty()
  // roomId?: number;

  @IsString()
  @IsNotEmpty()
  roomType?: string;

  @IsDate()
  @IsOptional()
  checkIn?: Date;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
