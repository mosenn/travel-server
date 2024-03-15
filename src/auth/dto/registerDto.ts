import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class registerDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsOptional()
  @IsString()
  @MinLength(3)
  username: string;
  @IsString()
  @IsOptional()
  image: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    { message: 'password too weak' },
  )
  password: string;
}
