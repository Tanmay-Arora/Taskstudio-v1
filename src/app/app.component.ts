import { Component, OnChanges, SimpleChanges} from '@angular/core';
import { AuthService } from './users/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'todostudio-app-v1';

  constructor(private _authService: AuthService) {}

  statusService = this._authService

}
