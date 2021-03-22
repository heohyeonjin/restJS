import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
// await NestFactory.create(AppModule)을 호출,어플리케이션은 3000포트 리스닝
bootstrap();
