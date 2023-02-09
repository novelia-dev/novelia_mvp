import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from 'src/users/users.repository';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginRequestDto) {
    const { email, password } = data;
    const user = await this.usersRepository.findUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    const isPasswordEqual: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordEqual) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }
    console.log('in auth service', user);
    const payload = { email: email, sub: user.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
