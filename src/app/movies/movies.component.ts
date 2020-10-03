import { Component, OnInit } from '@angular/core';
import {MoviesServiceService} from '../movies-service.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
imgSrc:string = 'https://image.tmdb.org/t/p/w500';
movieArr:any[];
  constructor(private _MoviesServiceService:MoviesServiceService) {
    this._MoviesServiceService.getMovies().subscribe((data)=>{
      data.results.sort(function(a,b){
        return b.vote_average - a.vote_average; 
      });
      this.movieArr = data.results.slice(0,18);
    })
   }

  ngOnInit(): void {
  }

}
