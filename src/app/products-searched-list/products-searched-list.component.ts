import { Component } from '@angular/core';
import {Product} from "../modules/Product";
import {ProductService} from "../product.service";
import {ResponseAmazon} from "../modules/ResponseAmazon";
import {HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products-searched-list',
  templateUrl: './products-searched-list.component.html',
  styleUrls: ['./products-searched-list.component.css']
})
export class ProductsSearchedListComponent {
  products : Array<Product>;
  searched!: string

  constructor(private productService : ProductService,
              private route: ActivatedRoute) {
    this.products = new Array<Product>();
  }
  affiche($event : Product){
    console.log($event.title);
  }
  ngOnInit() {
    this.searched = this.route.snapshot.params['searched'];
    this.getProductsSearched(this.searched);
  }

  public getProductsSearched(searched: string): void {
    this.productService.getProductSearched(searched).subscribe(
      (response : any) => {
        this.products = response.products;
        console.log(this.products);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
