import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable , BehaviorSubject} from 'rxjs';
import {userData} from './userData';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 currentUser = new BehaviorSubject(null); 
 
  constructor(private _HttpClient:HttpClient , private _Router:Router) { 
    
    if (localStorage.getItem('userData') != null) {
        this.currentUser.next(JSON.parse(localStorage.getItem('userData'))) ;
    }
    
  }


 register(registerFormValue):Observable<any>{
   return this._HttpClient.post(`https://routeegypt.herokuapp.com/signup`,registerFormValue);
 }

 login(loginFormValue):Observable<any>{
  return this._HttpClient.post(`https://routeegypt.herokuapp.com/signin`,loginFormValue);
}

logOut(){
  this.currentUser.next(null);
  localStorage.setItem("userData",null);
  this._Router.navigate(['/login']);
}

saveUserData(first_name , last_name , email , token){
 let user = new userData(first_name , last_name , email , token);
 localStorage.setItem("userData",JSON.stringify(user));
 this.currentUser.next(user);   
}

}
