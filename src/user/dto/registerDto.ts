import {IsEmail,  IsOptional, IsString ,} from 'class-validator'

export class registerDto {
    @IsString()
    @IsEmail()
  
    email:string;
    @IsString()
    name:string;
    @IsString()
    @IsOptional()
    image:string
}