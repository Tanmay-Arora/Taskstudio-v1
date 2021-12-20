import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Regmodel } from 'src/app/model/regmodel';
import { Users } from 'src/app/model/users';
import { AuthService } from '../auth.service';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userData!: Regmodel;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private _authService: AuthService) { }

  ngOnInit(): void {
    this.userData = new Regmodel('', '', '');
  }

  signupForm = this.fb.group({
    name: ['', [Validators.required]],
    emailAddr: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(7)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(7)]]
  }, {validator: PasswordValidator});


  get name(){
    return this.signupForm.get('name');
  }

  get emailAddr() {
    return this.signupForm.get('emailAddr');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  onSubmit(){
    console.log("Submitted")
    console.log(this.emailAddr?.value + ' ' + this.password?.value);
    //this.userData['emailAddr'] = this.emailAddr?.value;
    //this.userData.password = this.password?.value;
    this.userData = new Regmodel(this.name?.value, this.emailAddr?.value, this.password?.value);
    console.log(this.userData)
    this._authService.setSignupInfo(this.userData)
    this.router.navigate(['../securityQuestions'], {relativeTo: this.route});
  }

}
