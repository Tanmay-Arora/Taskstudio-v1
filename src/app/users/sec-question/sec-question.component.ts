import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Regsecurity } from 'src/app/model/regsecurity';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sec-question',
  templateUrl: './sec-question.component.html',
  styleUrls: ['./sec-question.component.css']
})
export class SecQuestionComponent implements OnInit {

  securityQues: String[] = [
    'How many floors are there in your building?',
    'What is the maiden name of your mother?',
    'What is your favourite sport?',
    'What was your birthplace?',
    'What was the name of your first pet?'
  ];

  userRecoveryData!: Regsecurity;

  constructor(private fb: FormBuilder,private _authService: AuthService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userRecoveryData = new Regsecurity('', '');
  }

  secqueForm = this.fb.group({
    secQuestion: ['', [Validators.required]],
    secAnswer: ['', [Validators.required]]
  });

  public get secQuestion(){
    return this.secqueForm.get('secQuestion');
  }

  public get secAnswer() {
    return this.secqueForm.get('secAnswer');  
  }

  onSubmit(){
    console.log("SecQue-Submitted")
    console.log(this.secQuestion?.value + ' ' + this.secAnswer?.value);
    this.userRecoveryData = new Regsecurity(this.secQuestion?.value, this.secAnswer?.value);
    console.log(this.userRecoveryData)
    this._authService.signup(this.userRecoveryData);
    this.router.navigate(['../login'], {relativeTo: this.route});
  }

}
