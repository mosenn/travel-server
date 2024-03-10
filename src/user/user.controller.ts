import { Body, Controller, Post,  } from '@nestjs/common';
import { UserService } from './user.service';
import { registerDto } from './dto/registerDto';

@Controller('user')
export class UserController {
    constructor(private readonly  userService:UserService) {}
    @Post('register')
    register(@Body() body:registerDto) {
       return this.userService.register(body)
    }
}
