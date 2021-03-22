/*controller에서 사용하는 function을 놓는 곳, 비지니스 로직을 실행하는 역할*/ 
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
