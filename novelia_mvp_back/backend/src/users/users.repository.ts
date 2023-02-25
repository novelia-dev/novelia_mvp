import { Injectable, HttpException } from '@nestjs/common';
import { User } from './users.schema';
import mongoose, { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserRequestDto } from './dto/user.request.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findAll() {
    const result = await this.userModel.find();
    console.log('findAll', result);
    return result;
  }

  async existsByEmail(email: string): Promise<boolean> {
    try {
      const result = await this.userModel.exists({ email });
      if (result) return true;
      else return false;
    } catch (erorr) {
      throw new HttpException('db error', 400);
    }
  }

  async findByTokenAndChangeToValidEmail(signupVerifyToken: string) {
    try {
      const user = await this.userModel.findOne({ signupVerifyToken });
      if (user) {
        user.isEmailValid = true;
        user.save();
      }
    } catch (error) {
      throw new HttpException('db error', 400);
    }
  }

  async findUserByIdWithoutPassword(
    userId: string | Types.ObjectId,
  ): Promise<User | null> {
    const user = await this.userModel.findById(userId).select('-password');
    return user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    return user;
  }

  async create(user): Promise<User> {
    return await this.userModel.create(user);
  }
}
