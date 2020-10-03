import { Component, OnInit } from '@angular/core';
import {MoviesServiceService} from '../movies-service.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  imgSrc:string = 'https://image.tmdb.org/t/p/w500';
   people:any[];
  constructor(private _MoviesServiceService:MoviesServiceService) { 
    this._MoviesServiceService.getPeople().subscribe((data)=>{
      data.results.sort(function(a,b){
        return b.vote_average - a.vote_average; 
      });
      this.people = data.results.slice(0,18);
    })
  }

  ngOnInit(): void {
  }

}
