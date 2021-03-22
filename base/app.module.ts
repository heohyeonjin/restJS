/*우리가 하는 모든걸 import*/ 
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], //url을 가져오고 함수를 실행
  providers: [AppService], //
})
//데코레이터, 클래스에 함수 기능 추가 가능, 클래스 위의 함수, 클래스를 위해 움직인다.
export class AppModule {}
