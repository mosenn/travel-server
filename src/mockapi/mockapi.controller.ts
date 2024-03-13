import { Controller, Get } from '@nestjs/common';
import { MockapiService } from './mockapi.service';

@Controller('mockapi')
export class MockapiController {
    constructor( private readonly mockapiService:MockapiService){}
    
    @Get('get/users')
    getMockApi(){
        return this.mockapiService.getMockApi()
    }
}
