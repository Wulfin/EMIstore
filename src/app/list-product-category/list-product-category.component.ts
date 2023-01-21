import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Product} from "../modules/Product";
import {ActivatedRoute} from "@angular/router";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {ProductService} from "../product.service";
import {ResponseAmazon} from "../modules/ResponseAmazon";

@Component({
  selector: 'app-list-product-category',
  templateUrl: './list-product-category.component.html',
  styleUrls: ['./list-product-category.component.css']
})
export class ListProductCategoryComponent implements OnInit {
  products : Array<Product>;

  constructor(private productService : ProductService, private  route : ActivatedRoute) {
    this.products=new Array<Product>();
  }

  affiche($event : Product){
    console.log($event.title);
  }

  ngOnInit(): void {
    const category : string = this.route.snapshot.params['category'];
    this.getProductsOfCategory(category);
  }

  public getProductsOfCategory(category : string): void {
    this.productService.getProductsOfCategory(category).subscribe(
      (response: ResponseAmazon) => {
        this.products = response.products;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
