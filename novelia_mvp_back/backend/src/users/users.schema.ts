import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaOptions, Document } from 'mongoose';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User extends Document {
  @ApiProperty({
    example: 'moi',
    description: 'name',
  })
  @Prop()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'hcloud0806@gmail.com',
    description: 'email',
  })
  @Prop()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '1234',
    description: 'password',
  })
  @Prop()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    example: 'uuid',
    description: 'signupVerifyToken',
  })
  @Prop()
  @IsNotEmpty()
  @IsString()
  signupVerifyToken: string;

  @ApiProperty({
    example: 'true',
    description: 'isEmailValid',
  })
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
