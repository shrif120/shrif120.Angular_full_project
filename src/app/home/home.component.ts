import { Component, OnInit } from '@angular/core';
import{MoviesServiceService} from '../movies-service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgSrc:string = 'https://image.tmdb.org/t/p/w500/';
  GetMovies:any[];
  GetTv:any[];
  GetAll:any[];
  term:string;
  constructor(private _MoviesServiceService:MoviesServiceService ) {
    _MoviesServiceService.getTrending('movies' , 'day').subscribe((data)=>{
      data.results.sort(function(a,b){
        return b.vote_average - a.vote_average; 
      });
       this.GetMovies = data.results.slice(0,16);
    },(err)=>{
      console.log(err);
    });
   _MoviesServiceService.getTrending('tv', 'day').subscribe((data)=>{
    data.results.sort(function(a,b){
      return b.vote_average - a.vote_average; 
    });
     this.GetTv = data.results.slice(0,16);
   });
   _MoviesServiceService.getTrending('tv' , 'week').subscribe((data)=>{
    data.results.sort(function(a,b){
      return b.vote_average - a.vote_average; 
    });
     this.GetAll = data.results.slice(0,16);
   });
   }
 
  ngOnInit(): void {
  }

  

}
