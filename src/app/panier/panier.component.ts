import { Component } from '@angular/core';
import {Product} from "../modules/Product";
import {ProductService} from "../product.service";
import {DetailPanier} from "../modules/DetailPanier";
import {PanierService} from "../panier.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  productsToBuy : Array<DetailPanier>;

  constructor(private productService : ProductService, private panierService: PanierService) {
    this.productsToBuy=new Array<DetailPanier>();
  }

  ngOnInit(){
    this.productsToBuy = this.getProductsInCart()
  }

  getProductsInCart(){
    return this.panierService.productsInCart;
  }

  getTotal(){
    let total = 0
    this.productsToBuy.forEach(elt => {
      total += elt.quantity * elt.product.price
    })
    return total
  }
}
