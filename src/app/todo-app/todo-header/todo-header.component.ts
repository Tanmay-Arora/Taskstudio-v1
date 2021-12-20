import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/users/auth.service';
import { FlexadjustService } from '../flexadjust.service';
import { TodoHomeComponent } from '../todo-home/todo-home.component';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  constructor(private _authService: AuthService, private router:Router, private route:ActivatedRoute) { }

 initLogout(){
  this._authService.logout();
  this.router.navigate(['/users/login'], {relativeTo: this.route})
 }

  ngOnInit(): void {
  }

}
