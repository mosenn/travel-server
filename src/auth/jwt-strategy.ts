import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpration: false,
      secretOrKey: 'secret',
    });
  }
  async validate(payload: {
    id: string;
    email: string;
    image: string;
    password: string;
    name: string;
  }) {
    console.log('payload in jwt-strategy auth', payload)
    return {
      id: payload.id,
      email: payload.email,
      image: payload.image,
      password: payload.password,
      name: payload.name,
    };
  }
}
