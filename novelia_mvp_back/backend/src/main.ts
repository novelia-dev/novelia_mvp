import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptionFilter/http-exception.filter';
import { SuccessInterceptor } from './common/interceptors/sucess.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new SuccessInterceptor());
  await app.listen(process.env.PORT);
}
bootstrap();
