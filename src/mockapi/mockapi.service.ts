import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MockapiService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly httpService: HttpService,
  ) {}
  async getMockApi() {
    const apiUrl = 'https://63d108283f08e4a8ff8ef010.mockapi.io/users';
    const response = await this.httpService.get(apiUrl).toPromise();
    const dataArray = response.data;
    console.log(dataArray);
  
    const dataInDBArray = [];
  
    for (const data of dataArray) {
      // Assuming data is an object
      const { name, phone, email } = data;
      console.log(name, phone, email);
  
      if (!email) {
        console.error("Email is missing in one of the response data objects.");
        // Handle the error or return an appropriate response
        return { message: 'Error: Email is missing in one of the response data objects.' };
      }
  
      const dataInDB = await this.prismaService.mockapi.create({
        data: {
          name,
          phone,
          email,
        }
      });
  
      dataInDBArray.push(dataInDB);
    }
  
    return { message: 'all users in mockapi', dataInDB: dataInDBArray };
  }
  
}
