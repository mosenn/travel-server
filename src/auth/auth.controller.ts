import { Body, Controller, Get, Post, Request, UseGuards,  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { registerDto } from './dto/registerDto';
import { loginDto } from './dto/login-dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly  authService:AuthService) {}
    @Post('register')
    register(@Body() body:registerDto) {
       return this.authService.register(body)
    }
    @Post('login')
    login(@Body() body:loginDto) {
       return this.authService.login(body)
    }
    @Get('profile')
    @UseGuards(JwtAuthGuard)
    prfoile(@Request() req) {
      return req.user
    }
}
