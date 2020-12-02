import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  publicKey: string;
  md5: string;
  ts: string;

  constructor() {
    this.publicKey = environment.publicKey;
    this.md5 = environment.md5;
    this.ts = environment.ts;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let params = new HttpParams();
    params = params.append('ts', this.ts);
    params = params.append('apikey', this.publicKey);
    params = params.append('hash', this.md5);
    const REQCOPY = request.clone({ params });
    return next.handle(REQCOPY);
  }
}
