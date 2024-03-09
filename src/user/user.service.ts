import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async register(body) {
    console.log(body);
    const user = await this.prismaService.user.create({
      data: {
        ...body,
      },
    });
    return {message:'user is register' , user}
  }
}
