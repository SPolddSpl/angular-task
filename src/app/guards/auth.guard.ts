import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Auth Logic is not Ready
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (Boolean(localStorage.getItem('isBlocked'))) {
      this.router.navigate(['blocked'])
      return false
    }
    
    if (localStorage.getItem('userRole') === 'User' || localStorage.getItem('userRole') === 'Admin') {
      console.log('Here')
      return true;
    }
    this.router.navigate(['auth']);
    return false;
  }

}
