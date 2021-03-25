import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Body,
  Query,
} from '@nestjs/common';
import {MoviesService} from './movies.service';
import {Movie} from './entities/movie.entity';
import {CreateMovieDto} from './dto/create-movie.dto';
import {UpdateMovieDto} from './dto/update-movie.dto';
@Controller('movies') //괄호 안이 entrypoint, 라우터
export class MoviesController {
  //movies.service.ts에 접근-->요청 import대신에 nestJS에서는 요청을 함
    constructor(private readonly moviesService: MoviesService){} //MoviesService:클래스
   
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  @Get(':id') //무언가가 필요하면 요청해야함!!! --> parameter요청
    getOne(@Param('id') movieId: number):Movie //url에 있는 id라는 parameter를  get하고 싶음, id parameter를 id라는 argument에 string 타입으로 저장
 {
    return this.moviesService.getOne(movieId);
  

}
  @Post()
  create(@Body()movieData: CreateMovieDto) //@Body : movieData안의 리퀘스트의 body를 가져오기 위해 씀, 무언가를 만들때, movieData는 createMovieDto라는 타입을 가짐
  {
   return this.moviesService.create(movieData);
  }

  @Delete(':id') //무슨 movie를 delete하는지 알아야함
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }
  //put은 모든 resource를 update patch는 리소스의 일부분만 업데이트
  @Patch(':id')
  path(@Param('id') movieId: number, @Body() updateData:UpdateMovieDto){
    return this.moviesService.update(movieId, updateData);
    
    /*return {
        updateMovie : movieId,
        ...updateData,
        //업데이트할 movie의 id랑 우리가 보낼 데이터의 오브젝트 리턴
    }*/
}//- 리턴값으로 json을 받았음
   
  }
