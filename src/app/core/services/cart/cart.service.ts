import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private httpClient: HttpClient = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);

  private get userTokenHeader(): any {
    if (!isPlatformBrowser(this.platformId)) {
      return {};
    }

    const token = localStorage.getItem('userToken');
    return token ? { token } : {};
  }

  addToCart(pId: string | null): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}cart`,
      {
        "productId": pId
      }
    )
  }

  upadateCart(pId: string | null, pCount: number): Observable<any> {
    return this.httpClient.put(`${environment.baseUrl}cart/${pId}`,
      {
        "count": pCount
      }
    )
  }

  getAllCart(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}cart`)
  }

  removeSpecProduct(pId: string | null): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}cart/${pId}`)
  }

  clearAllCart(): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}cart`)
  }


}
