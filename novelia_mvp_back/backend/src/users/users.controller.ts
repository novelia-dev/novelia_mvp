import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserLoginDto } from '../dto/user-login.dto';
import { VerifyEmailDto } from '../dto/verify-email.dto';
import { UsersService } from './users.service';
import { User } from './users.schema';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentCat(@Req() req: any) {
    console.log(1234, req);
    return req.user;
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    const { signupVerifyToken } = dto;
    return await this.usersService.verifyEmail(signupVerifyToken);
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<any> {
    const { email, password } = dto;
    console.log(email, password);
    return this.authService.jwtLogIn(dto);
  }

  @Get('/all')
  async getAllUserInfo() {
    return await this.usersService.getAllUser();
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string) {
    console.log(userId);
    return;
  }
}
