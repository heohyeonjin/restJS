import { Injectable,NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
/*데이터베이스 생성*/
@Injectable()
export class MoviesService {
  private movies: Movie[] = []; //배열 형식 지정

  getAll(): Movie[] {
      return this.movies;
  }
  getOne(id:number): Movie{
   const movie = this.movies.find(movie=>movie.id===id); //+id == parseInt(id)
   if(!movie) //movieid가 존재하지 않는 거 get했을때 오류나타나게
   {   throw new NotFoundException(`Movie with ID${id}not found.`);
   }
  return movie;
  }
  deleteOne(id: number){
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== id);
  }
  create(movieData: CreateMovieDto){
      this.movies.push({
          id: this.movies.length+1,
          ...movieData
      })
  }
  update(id:number, updateData:UpdateMovieDto){
     const movie =  this.getOne(id);//movie가져오고
     this.deleteOne(id); //원래 있떤 movie를 지우고
     this.movies.push({...movie,...updateData});//과거의 데이터에 새로운 데이터를 더함

      
  }
}
