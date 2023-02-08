import Mail = require('nodemailer/lib/mailer');
import * as nodemailer from 'nodemailer';

import { Injectable } from '@nestjs/common';

// 메일 욥선 타입. 수신자(to), 메일 제목, html 형식의 메일 본문을 가짐
interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

const generateRandom = function (min, max) {
  const ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNum;
};

@Injectable()
export class EmailService {
  private transporter: Mail;

  // nodemailer에서 제공하는 Transporter 객체를 생성
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_AUTH_EMAIL,
        pass: process.env.EMAIL_AUTH_PASSWORD,
      },
    });
  }

  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    // 이 링크를 통해 우리 서비스로 이메일 인증 요청이 들어옴
    const baseUrl = 'http://localhost:8000'; // TODO: config

    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

    // 메일 본문 구성 form 태그를 이용해 POST 요청 실시
    const mailOptions: EmailOptions = {
      to: emailAddress,
      subject: '가입 인증 메일',
      //   html: `
      //     다음 인증번호를 입력해주시길 바랍니다.
      //     ${num}
      //   `,
      html: `
      <p>안녕하세요 노벨리스트입니다.</p>
      <p>가입확인 버튼를 누르시면 가입 인증이 완료됩니다.</p>
      <form action="${url}" method="POST">
        <button>가입확인</button>
      </form>
      `,
    };

    // transporter 객체를 이용해 메일 전송
    return await this.transporter.sendMail(mailOptions);
  }
}
