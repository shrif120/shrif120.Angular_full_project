import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesServiceService} from '../movies-service.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
imgSrc:string = 'https://image.tmdb.org/t/p/w500';
 type:any;
 id:any;
 movieDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesServiceService:MoviesServiceService) {
    this.type = _ActivatedRoute.snapshot.paramMap.get('type');
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');
    _MoviesServiceService.getItemDetails(this.type , this.id).subscribe((data)=>{
      this.movieDetails = data;
    });
   }

  ngOnInit(): void {
  }

}
