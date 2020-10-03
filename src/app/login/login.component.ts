import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 loginForm:FormGroup;
 errMessage:string;
 flag:boolean = false;
  constructor(private _AuthService:AuthService , private _Router:Router) { }
  
  getLoginInfo(loginForm){
   this._AuthService.login(loginForm.value).subscribe((data)=>{
     if(data.message == 'success'){
          this._AuthService.saveUserData(data.user.first_name , data.user.lasst_name , data.user.email , data.token);
          this._Router.navigate(['/home']);
    }else{
         this.flag = true;
         this.errMessage = data.message;
    }
   })
  }

   goToregisteration(){
     this._Router.navigate(['/register']);
   }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email':new FormControl(null , [Validators.required , Validators.email]),
      'password':new FormControl(null , [Validators.pattern(/^[A-Z][0-9-a-z]{3,10}$/), Validators.required]), 
    }) 
  }

}
