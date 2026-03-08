import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient: HttpClient = inject(HttpClient)
  getAllProducts(): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}products`);
  }

  getSpecProduct(pId: string): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}products/${pId}`);
  }
}
