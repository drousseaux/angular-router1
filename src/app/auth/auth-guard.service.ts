import { Injectable } from '@angular/core';
import { CanLoad, CanActivateChild, Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { IAuthStatus, AuthService } from './auth.service';
import { UiService } from '../common/ui.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  protected currentAuthStatus: IAuthStatus;

  constructor(
    protected authService: AuthService,
    protected router: Router,
    private uiService: UiService) {
      this.authService.authStatus.subscribe(authStatus => (this.currentAuthStatus = authStatus));
  }

  canLoad(route: Route, segments: import ('@angular/router').UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLogin();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLogin(route);
  }

  canActivateChild(childRoute: import ('@angular/router').ActivatedRouteSnapshot,
                   state: import ('@angular/router').RouterStateSnapshot)
                  // tslint:disable-next-line:max-line-length
                  : boolean | import ('@angular/router').UrlTree | Observable<boolean | import ('@angular/router').UrlTree> | Promise<boolean | import ('@angular/router').UrlTree> {
    return this.checkLogin(childRoute);
  }

  protected checkLogin(route?: ActivatedRouteSnapshot) {
    let roleMatch = true;
    let params: any;
    if (route) {
      const expectedRole = route.data.expectedRole;
      if (expectedRole) {
        roleMatch = this.currentAuthStatus.userRole === expectedRole;
      }

      if (roleMatch) {
        params = { redirectUrl: route.pathFromRoot.map(r =>
            r.url).join('/')
        };
      }
    }

    if (!this.currentAuthStatus.isAuthenticated || !roleMatch) {
      this.showAlert(this.currentAuthStatus.isAuthenticated, roleMatch);
      this.router.navigate(['login', params || {} ]);
      return false;
    }

    return true;
  }

  private showAlert(isAuth: boolean, roleMatch: boolean) {
    if (!isAuth) {
      this.uiService.showToast('You must login to continue');
    }

    if (!roleMatch) {
      this.uiService.showToast('You do not have the permissions to view this resource');
    }
  }
}
