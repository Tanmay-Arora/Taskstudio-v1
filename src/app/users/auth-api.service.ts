import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Regmodel } from '../model/regmodel';
import { Users } from '../model/users';
import { delay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  url:string = 'http://localhost:3000/users';

  authResult!: Boolean;
  user!: any;

  constructor(private http: HttpClient) { }

  postSignupData(data: Users){
    this.http.post(this.url, data).subscribe(responseData => {
      console.log(responseData);
    })
  }

  
  login(email: String, password:string){   
    let enhancedURL = `${this.url}?emailAddr=${email}&password=${password}`;
    return this.http.get<Users>(enhancedURL);
  }

}
