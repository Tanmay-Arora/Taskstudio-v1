import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private _authService: AuthService, private router:Router, private route:ActivatedRoute) { }

  incorrectPassError:Boolean = false;

  ngOnInit(): void {
    this.incorrectPassError = false;
  }

  loginForm = this.fb.group({
    emailAddr: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  get emailAddr() {
    return this.loginForm.get('emailAddr');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(){
    this._authService.login(this.emailAddr?.value, this.password?.value)

    setTimeout(() => {
      if(this._authService.isLoggedIn()){
        this.incorrectPassError = false;  
        this.router.navigate(['../../app/home'], {relativeTo: this.route});
      }
      else{
        this.incorrectPassError = true;
      }
    }, 600);
  }

}
