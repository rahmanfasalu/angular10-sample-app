import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppHttpServices {
  constructor(private http: HttpClient) {}

  httpGet(API_ENDPOINTS: string): Observable<any> {
    return this.http.get(API_ENDPOINTS);
  }
}
