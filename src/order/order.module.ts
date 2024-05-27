import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [OrderService],
  controllers: [OrderController],
  imports: [PrismaModule],
})
export class OrderModule {}
