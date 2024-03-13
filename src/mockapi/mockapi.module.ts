import { Module } from '@nestjs/common';
import { MockapiService } from './mockapi.service';
import { MockapiController } from './mockapi.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';
@Module({
  providers: [MockapiService],
  controllers: [MockapiController],
  imports: [PrismaModule , HttpModule],
})
export class MockapiModule {}
