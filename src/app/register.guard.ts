import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './users/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {

  constructor(private _authService: AuthService, private router: Router, private route: ActivatedRoute ) {}

  canActivate(): boolean {
    if(this._authService.isSignedUp() == false){
      this.router.navigate(['/users/signup'], {relativeTo: this.route});
    }
    return true;
  }
      
}
