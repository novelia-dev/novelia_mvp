import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaOptions, Document } from 'mongoose';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class LoginResponseDto extends Document {
  @ApiProperty({
    example: true,
    description: 'success',
  })
  @Prop()
  @IsBoolean()
  @IsNotEmpty()
  success: boolean;

  @ApiProperty({
    example:
      'hcloud0806@geyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhjbG91YWRmQGFkZmEuY29tIiwic3ViIjoiNjNlNDliOTMzNTZjOTUwZTkwN2E5NGU0IiwiaWF0IjoxNjc1OTMyNTg3LCJleHAiOjE3MDc0OTAxODd9.CcI5iEe0cftjJ-zkNddSb6ow6uTEg7EtX1NMWWVeRmcmail.com',
    description: 'token',
  })
  @Prop()
  @IsString()
  @IsNotEmpty()
  token: string;
}
