import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { MyplatformService } from '../../services/platformBrowser/myplatform.service';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  let myplatformService: MyplatformService = inject(MyplatformService)
  if (myplatformService.checkPlatFormBrowser()) {
    if (localStorage.getItem("userToken")) {
      let userToken: any = { token: localStorage.getItem("userToken") }

      req = req.clone({
        setHeaders: userToken
      })
    }
  }
  return next(req);
};
