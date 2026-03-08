import { MyplatformService } from './../platformBrowser/myplatform.service';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { jwtDecode } from "jwt-decode";
import { User } from '../../interfaces/user';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    if(this.myplatformService.checkPlatFormBrowser()) {
      if(localStorage.getItem("userToken")) {
        this.setUserData();
      }
    }
  }
  private httpClient : HttpClient = inject(HttpClient)
  private myplatformService : MyplatformService = inject(MyplatformService);
  userDate = new BehaviorSubject(null);

  registerAPI(bodyData: object): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}auth/signup`, bodyData)
  }

  loginAPI(bodyData: object): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}auth/signin`, bodyData)
  }

  setUserData() {
    this.userDate.next(jwtDecode(localStorage.getItem("userToken")!))

  }
}
