import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor() {}

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
