import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsResponse } from '../models/products';
import { Observable } from 'rxjs';

const api = "https://dummyjson.com/products/";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(api);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(api + id);
  }
}
