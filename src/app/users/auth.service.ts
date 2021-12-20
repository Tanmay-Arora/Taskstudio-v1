import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regmodel } from '../model/regmodel';
import { Regsecurity } from '../model/regsecurity';
import { Users } from '../model/users';
import { AuthApiService } from './auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  userCred!:Regmodel;
  reqUser!: any
  user!:Users;

  constructor(private _authApiService:AuthApiService) { }
  
  //Login 
  public loggedIn:Boolean = false;   //remember to change to false

  login(email:string, password:string){
    let authObs: Observable<Users>

    authObs = this._authApiService.login(email, password);
    authObs.subscribe(
      (response) => {
        console.log(response);
        setTimeout(() => {
          this.loggedIn = response.length != 0 ? true : false;
        }, 500);
      }
    )
    //console.log(this._authApiService.authResult);
    //this.loggedIn = this._authApiService.authResult;
    //console.log(this.loggedIn);
    //return this.loggedIn;
  }

  logout(){
    this.loggedIn = false;
    
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  //Signup
  public signedUp:boolean = false;

  setSignupInfo(data: Regmodel){
    this.userCred = data;
    this.signedUp = true;
  }

  signup(data: Regsecurity){
    this.user = new Users(this.userCred.emailAddr, this.userCred.password, data.secQuestion, data.secAnswer);
    this._authApiService.postSignupData(this.user);
  }

  isSignedUp(){
    return this.signedUp;
  }

}

