import {Component, OnInit} from '@angular/core';
import { Product } from '../modules/Product';
import {ProductService} from "../product.service";
import {ResponseAmazon} from "../modules/ResponseAmazon";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
  products : Array<Product>;

  constructor(private productService : ProductService) {
    this.products = new Array<Product>();
  }
  affiche($event : Product){
      console.log($event.title);
  }
  ngOnInit() {
      this.getProducts();
  }

  public getProducts(): void {
    this.productService.getProducts().subscribe(
      (response: ResponseAmazon) => {
        this.products = response.products;
        this.productService.products = response.products
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
