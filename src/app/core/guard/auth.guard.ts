import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MyplatformService } from '../services/platformBrowser/myplatform.service';


export const authGuard: CanActivateFn = (route, state) => {
  let router: Router = inject(Router);
  let myplatformService: MyplatformService = inject(MyplatformService);

  // إذا لم نكن في browser، اسمح بالملاحة (SSR)
  if (!myplatformService.checkPlatFormBrowser()) {
    return true;
  }

  // نتحقق من وجود الـ token
  const userToken = localStorage.getItem("userToken");

  if (userToken) {
    return true;
  }

  // إذا لم يكن هناك token، أعد التوجيه إلى login
  return router.createUrlTree(["/login"]);
};
