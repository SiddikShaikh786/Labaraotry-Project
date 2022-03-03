import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: UserService) { }
  canActivate() {
    if (this.service.isLoggedin()) {
      return true;

    }
    else {
      window.alert('you need to login to visit page')
      return false
    }
  }

}
