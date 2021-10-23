import {Injectable} from '@angular/core';

import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = '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';
    request = request.clone({headers: request.headers.set('Authorization', 'token ' + token)});
    request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }));
  }
}
