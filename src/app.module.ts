import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [AppController , UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
