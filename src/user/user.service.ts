import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { registerDto } from './dto/registerDto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async register(body: registerDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id:"",
        email:body?.email as string,
      },
      select: { email: true },
    }  );
    if (user) {
      throw new UnauthorizedException('email already exist');
    }
    const Newuser = await this.prismaService.user.create({
      data: {
        ...body,
      },
    });
    return { message: 'user is register', Newuser };
  }

  async create(body: registerDto) {
    //*  password and confrimPassword must be same
    // if (body.password !== body.confirmPassword) {
    //   throw new BadRequestException('Passwords do not match');
    // }
    // * check user before register
    const user = await this.prismaService.user.findUnique({
      where: {
        email: body.email,
      },
      select: { email: true },
    });
    if (user) {
      throw new UnauthorizedException('email already exist');
    }
    const newUser = await this.prismaService.user.create({
      data: {
        ...body,
      },
    });
    return { message: 'user is registers', newUser };
  }

}
