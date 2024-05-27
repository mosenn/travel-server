import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor( private readonly orderService:OrderService){}
@Post('create') 
createOrder(@Body() body:any) {
    return this.orderService.createOrder(body)

}
@Get('userOrder/:id')
getOrders(@Param() params:{id:string}) {
    return this.orderService.getOrders(params.id)
}

}
