import { Component, OnInit } from '@angular/core';
import {MoviesServiceService} from '../movies-service.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  imgSrc:string = 'https://image.tmdb.org/t/p/w500';
  tvShows:any[];
  constructor(private _MoviesServiceService:MoviesServiceService) {
    this._MoviesServiceService.getTvShows().subscribe((data)=>{
      data.results.sort(function(a,b){
        return b.vote_average - a.vote_average; 
      });
      this.tvShows = data.results.slice();
    })
   }

  ngOnInit(): void {
  }

}
