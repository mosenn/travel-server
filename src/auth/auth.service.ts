import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { registerDto } from './dto/registerDto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { loginDto } from './dto/login-dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    public jwtService: JwtService,
  ) {}
  async register(body: registerDto) {
    console.log(body);
    const user = await this.prismaService.user.findUnique({
      where: {
        email: body.email,
      },
      select: { email: true },
    });
    if (user) {
      throw new UnauthorizedException('email already exist');
    }
    //*hash password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(body?.password, salt);
    // console.log('hash password', hash);
    const Newuser = await this.prismaService.user.create({
      data: {
        ...body,
        password: hash,
      },
    });
    return { message: 'user is register', status: 201, Newuser };
  }

  async login(body: loginDto) {
    const user = await this.prismaService.user.findUnique({
      where: { email: body.email },
      // select: { email: true, id: true, image: true , password:true},
    });
    //* check user is exist
    if (!user) {
      throw new BadRequestException('email or password is worng');
    }
    //* compare password
    const compare = await bcrypt.compare(body.password, user.password);
    if (!compare) {
      throw new UnauthorizedException();
    }
    //* token
    const { id, email, image, username, password } = user;
    const token = await this.jwtService.sign({
      id,
      email,
      image,
      username,
      password,
    });
    console.log(user);
    return { token: token, data: user, message: `${user.email} login` };
  }
}
