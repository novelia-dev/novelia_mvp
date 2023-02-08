import * as uuid from 'uuid';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

// EmailService 프로바이더를 새로 만듬.
import { EmailService } from '../email/email.service';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private emailService: EmailService, //    @InjectRepository(User) //    private usersRepository: Repository<User>, //    private dataSource: DataSource,
  ) {}

  // findAll(): Promise<User[]> {
  //   return this.usersRepository.find();
  // }

  // findOne(id: number): Promise<User> {
  //   return this.usersRepository.findOneBy({ id });
  // }

  // async remove(id: string): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }

  // async createOne(user: User) {
  //   await this.dataSource.transaction(async (manager) => {
  //     await manager.save(user);
  //   });
  // }

  async createUser(name: string, email: string, password: string) {
    // 가입하려는 유저가 존재하는지 검사 우선 false
    const isOld = await this.checkUserExists(email);

    if (isOld) {
      throw new UnauthorizedException('이미 이메일이 존재합니다.');
    }

    const signupVerifyToken = uuid.v1();

    // 유저를 데이터베이스에 저장
    await this.saveUser(name, email, password, signupVerifyToken);
    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  private async checkUserExists(email: string) {
    const isUserExist = await this.usersRepository.existsByEmail(email);
    return isUserExist; // TODO: DB 연동 후 구현
  }

  private async saveUser(
    name: string,
    email: string,
    password: string,
    signupVerifyToken: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.create({
      email,
      name,
      password: hashedPassword,
      signupVerifyToken,
    });

    return user.readOnlyData;
  }

  // 회원가입 이메일 발송
  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(
      email,
      signupVerifyToken,
    );
  }

  async verifyEmail(signupVerifyToken: string): Promise<string> {
    await this.usersRepository.findByTokenAndChangeToValidEmail(
      signupVerifyToken,
    );
    return 'done'; // TODO: DB에서 signupVerifyToken으로 회원 가입 처리중인 유저가 있는지 조회하고 없다면 에러 처리 2. 바로 로그인 상태가 되도록 JWT발급.
  }

  async getAllUser() {
    const allUser = await this.usersRepository.findAll();
    const readOnlyUsers = allUser.map((user) => user.readOnlyData);
    return readOnlyUsers;
  }
}
