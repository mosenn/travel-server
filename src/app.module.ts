import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { MockapiService } from './mockapi/mockapi.service';
import { MockapiController } from './mockapi/mockapi.controller';
import { MockapiModule } from './mockapi/mockapi.module';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';
import { OrderModule } from './order/order.module';
@Module({
  imports: [
    PrismaModule,
    AuthModule,
    MockapiModule,
    HttpModule,
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1d' } }),
    OrderModule,
  ],
  controllers: [AppController, AuthController, MockapiController, OrderController],
  providers: [AppService, AuthService, MockapiService, OrderService],
})
export class AppModule {}
