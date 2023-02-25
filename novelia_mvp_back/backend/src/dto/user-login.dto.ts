// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { ApiProperty } from '@nestjs/swagger';
// import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
// import { Document, SchemaOptions } from 'mongoose';

// const options: SchemaOptions = {
//   timestamps: true,
// };

// @Schema(options)
// export class UserLoginDto extends Document {
//   @Prop({ required: true, unique: true })
//   @IsEmail()
//   @IsNotEmpty()
//   email: string;

//   @Prop({ required: true })
//   @IsString()
//   @IsNotEmpty()
//   password: string;

//   readonly readOnlyData: {
//     email: string;
//   };
// }

import { ApiProperty, PickType } from '@nestjs/swagger';
import { User } from 'src/users/users.schema';

export class UserLoginDto extends PickType(User, [
  'email',
  'password',
] as const) {
  readonly readOnlyData: {
    email: string;
  };
}
