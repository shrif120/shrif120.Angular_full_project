import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
 isLogin:boolean = false;
  constructor(private _AuthService:AuthService) { 
    this._AuthService.currentUser.subscribe((data)=>{
      if(data != null){
          this.isLogin = true ;
      }else{
         this.isLogin = false ;
      }
    })
  }
  
  logOut(){
    this._AuthService.logOut();
  }

  ngOnInit(): void {
  }

}
