import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//Blocked logic is not ready
export class BlockedGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isBlocked: boolean = JSON.parse(localStorage.getItem('isBlocked'));
    if (isBlocked) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }

}
