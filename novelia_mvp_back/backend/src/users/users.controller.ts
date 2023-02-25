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
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiHeader,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { ReadOnlyUserDto } from './dto/user.dto';
import { UserPostDto } from './dto/userpost.dto';
import { LoginResponseDto } from 'src/auth/dto/login.response.dto';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  // @ApiOperation({ summary: '이메일 인증 관련 api 프론트 상에서 만질일 없음' })
  // @Post('/email-verify')
  // async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
  //   const { signupVerifyToken } = dto;
  //   return await this.usersService.verifyEmail(signupVerifyToken);
  // }

  @ApiOperation({ summary: '로그인' })
  @ApiBody({
    description: 'login body ex',
    type: UserLoginDto,
  })
  @ApiResponse({
    status: 201,
    type: LoginResponseDto,
  })
  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<any> {
    const { email, password } = dto;
    console.log(email, password);
    return this.authService.jwtLogIn(dto);
  }

  @ApiOperation({ summary: '모든 유저 가져오기' })
  @Get('/all')
  async getAllUserInfo() {
    return await this.usersService.getAllUser();
  }

  @ApiOperation({
    summary: '로그아웃',
    description:
      '프론트 상에서 저장해놓은 jwt 없애기 사실 이 api가 제공하는 기능은 없음. 명목상 존재',
  })
  @Post('/logout')
  logout() {
    return this.usersService.logout();
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string) {
    console.log(userId);
    return;
  }

  @ApiOperation({ summary: '하나 가져오기' })
  @ApiBearerAuth('token')
  @ApiResponse({
    status: 201,
    description: '',
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentCat(@Req() req: any) {
    console.log(1234, req);
    return req.user;
  }

  @ApiResponse({
    status: 500,
    description: 'Sserver Error..',
  })
  @ApiResponse({
    status: 201,
    description: '유저 생성 완료!',
    type: ReadOnlyUserDto,
  })
  @ApiBody({
    description: 'body exmaple',
    type: UserPostDto,
  })
  @ApiOperation({ summary: '회원가입', description: '새로운 유저를 생성한다.' })
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { name, email, password } = dto;
    await this.usersService.createUser(name, email, password);
  }
}
