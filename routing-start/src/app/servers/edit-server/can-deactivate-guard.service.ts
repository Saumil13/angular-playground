import { Observable } from 'rxjs';
import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

export interface CanComponentDeactive {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivatedGuard implements CanDeactivate<CanComponentDeactive> {
  canDeactivate(component: CanComponentDeactive, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextStage?: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
