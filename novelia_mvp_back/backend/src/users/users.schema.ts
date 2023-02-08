import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaOptions, Document } from 'mongoose';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User extends Document {
  @Prop()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop()
  @IsNotEmpty()
  @IsString()
  password: string;

  @Prop()
  @IsNotEmpty()
  @IsString()
  signupVerifyToken: string;

  @Prop({ default: false })
  @IsNotEmpty()
  @IsBoolean()
  isEmailValid: boolean;

  readonly readOnlyData: {
    email: string;
    name: string;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
