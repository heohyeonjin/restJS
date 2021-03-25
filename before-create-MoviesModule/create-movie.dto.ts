/*dto: 데이터 전송 객체*/
import { IsNumber, IsOptional, IsString } from 'class-validator';


export class CreateMovieDto //타입생성(사람들이 보낼 수 있는거, 보냈으면 하는 것들)
{  //CrateMovieDto를 위한 decorator작성
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional() 
  @IsString({ each: true}) //모든 요소를 하나씩 검사
  readonly genres: string[];
}
//moviedata의 타입
