import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserregService } from '../Service/userreg.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private service: UserregService) { }

  intercept(request: HttpRequest<any>, handler: HttpHandler) {
    const modifiedRequest = request.clone({
      headers: request.headers.append('authorization', `Bearer ${this.service.getTokens()}`)
    });
    return handler.handle(modifiedRequest)
  }
}
