import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class OrderService {
  constructor(private readonly prsimaService: PrismaService) {}
  async createOrder(body: any) {
    console.log(body);
    const orderCreate = await this.prsimaService.order.create({
      data: { ...body },
    });
    return { message: 'order is create', status: 201, data: orderCreate };
  }
  async getOrders(userId) {
    const orders = await this.prsimaService.user.findUnique({
      where: {
        id: userId,
      },
      include: { orders: true },
    });
    console.log('orders', orders);
    // Convert the data field to a JSON string
    const ordersWithStringifiedData = orders.orders.map((order) => ({
      ...order,
      data: JSON.stringify(order.data),
    }));
    console.log('ordersWithStringifiedData : ', ordersWithStringifiedData);
    return {
      message: 'user order',
      status: 200,
      data: orders,
    };
  }
}
