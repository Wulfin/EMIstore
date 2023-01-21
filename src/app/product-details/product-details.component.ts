import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../modules/Product";
import {ProductService} from "../product.service";
import {ResponseAmazon} from "../modules/ResponseAmazon";
import {HttpErrorResponse} from "@angular/common/http";
import {PanierService} from "../panier.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  public product !: Product;
  public mainImage: any;
  constructor(private productService : ProductService,
              private  route : ActivatedRoute,
              private panService: PanierService) {}

  ngOnInit() {
    const id : number = this.route.snapshot.params['id'];
    this.getProductById(id)
  }

  getProductById(id: number){
    this.productService.getProductById(id).subscribe(
      (response: Product) => {
        this.product = response;
        this.mainImage = response.thumbnail
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  changeImage(image: string){
    this.mainImage = image
  }

  addToCart() {
    this.panService.addToCart(this.product);
  }

  isInCart(){
    return this.panService.isInCart(this.product);
  }

  getQuantityInCart(){
    return this.panService.getQuantityInCart(this.product);
  }
}
