import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class VerifyEmailDto extends Document {
  @Prop({ required: true })
  @IsString()
  @IsNotEmpty()
  signupVerifyToken: string;

  readonly readOnlyData: {
    signupVerifyToken: string;
  };
}
