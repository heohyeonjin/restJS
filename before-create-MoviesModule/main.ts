import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //우리가 쓰고 싶은 파이프를 NestJS 어플리케이션에 넘겨줌
   app.useGlobalPipes(new ValidationPipe({//유효성 검사해 주는 파이프
     whitelist: true, // true로 설정하면 아무 decorator도 없는 어떠한property의 object를 거름
     forbidNonWhitelisted: true, //이상한걸 보내면 리퀘스트 자체를 막아버리기
     transform: true, // 유저들이 보낸 것을 원하는 실제 타입으로 변환해줌
    }),
  ); 
  await app.listen(3000);
}
// await NestFactory.create(AppModule)을 호출,어플리케이션은 3000포트 리스닝
bootstrap();
