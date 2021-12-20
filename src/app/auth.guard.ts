import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './users/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private router: Router, private route: ActivatedRoute ) {}

  canActivate(): boolean {
    if(this._authService.isLoggedIn() == false){
      this.router.navigate(['/users/login'], {relativeTo: this.route});
    }
    return true;
  }
      
  }
  

