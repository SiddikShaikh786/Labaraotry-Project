import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router) { }
  canActivate() {
    if (localStorage.getItem('token') && localStorage.getItem('role') === 'admin') {
      alert('You are ADMIN, you can visit this page');
      return true

    }
    else {
      alert('SORRY CANNOT ACESSS THIS PAGE !!!!')
      return false
    }

  }

}
