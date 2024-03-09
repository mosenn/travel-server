import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers:[UserService],
  controllers: [UserController],
  imports:[PrismaModule]
})
export class UserModule {}
