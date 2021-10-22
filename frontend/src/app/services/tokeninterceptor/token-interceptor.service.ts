import { Injectable } from '@angular/core';
import { CheckService } from '../tokeninterceptor/check.service';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(public checkService: CheckService) { }

  intercept(req:any, next:any) {
    let addToken = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.checkService.getToken()}`
      }
    })

    return next.handle(addToken)
  }
}
