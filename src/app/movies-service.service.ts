import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  
  constructor(public _HttpClient:HttpClient) { }

  getTrending(mediaType ,  duration):Observable<any>
  {
     return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/${duration}?api_key=9b1745ca52af52147ba8957fc667d4d6`); 
  }
  getMovies():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=9b1745ca52af52147ba8957fc667d4d6&language=en-US&page=1`);
  }
  getTvShows():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/popular?api_key=9b1745ca52af52147ba8957fc667d4d6&language=en-US&page=8`);
  }
  getPeople():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=9b1745ca52af52147ba8957fc667d4d6&language=en-US&page=1`);
  }
  getItemDetails(mediaType , id):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=9b1745ca52af52147ba8957fc667d4d6&language=en-US`);
  }
}
