import { Component, OnInit } from '@angular/core';
import{MoviesServiceService} from '../movies-service.service';
@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {
  imgSrc:string = 'https://image.tmdb.org/t/p/w500';
  GetNetwork:any[];
  constructor(private _MoviesServiceService:MoviesServiceService) {
    this._MoviesServiceService.getTvShows().subscribe((data)=>{
        this.GetNetwork = data.results;
    })
   }

  ngOnInit(): void {
  }

}
