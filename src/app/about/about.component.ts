import { Component, OnInit } from '@angular/core';
import{MoviesServiceService} from '../movies-service.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  imgSrc:string = 'https://image.tmdb.org/t/p/w500';
 ARR:any[];
  constructor(private _MoviesServiceService:MoviesServiceService) {
      this._MoviesServiceService.getMovies().subscribe((data)=>{
        this.ARR = data.results;
      })
   }

  ngOnInit(): void {
  }

}
