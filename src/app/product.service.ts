import {EventEmitter, Injectable} from '@angular/core';
import {Product} from "./modules/Product";
import {HttpClient} from "@angular/common/http";
import {ResponseAmazon} from "./modules/ResponseAmazon";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  products !: Product[];

  constructor(private http : HttpClient) {

  }

  public getProducts(): Observable<ResponseAmazon> {
      return this.http.get<ResponseAmazon>("https://dummyjson.com/products?limit=200");
  }

  public getProductsOfCategory(category: string): Observable<ResponseAmazon> {
    return this.http.get<ResponseAmazon>(`https://dummyjson.com/products/category/${category}`)
  }

  public getProductById(id: number) :Observable<Product> {
    return this.http.get<Product>(`https://dummyjson.com/products/${id}`)
  }

  public getProductSearched(searched: string) :Observable<Product[]> {
    return this.http.get<Product[]>(`https://dummyjson.com/products/search?q=${searched}`)
  }


}
