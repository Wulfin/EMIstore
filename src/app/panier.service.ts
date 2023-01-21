import {EventEmitter, Injectable} from '@angular/core';
import {Product} from "./modules/Product";
import {DetailPanier} from "./modules/DetailPanier";
import {BehaviorSubject, Subject} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  productsInCart: Array<DetailPanier>;
  productsInCartChanged = new EventEmitter<Array<DetailPanier>>()


  constructor() {
    this.productsInCart = new Array<DetailPanier>()
  }

  addToCart(product: Product){
    let detailPanier = this.isInCart(product)
    console.log(detailPanier)
    if (!detailPanier) {
      let detailPanier = new DetailPanier(product, 1);
      this.productsInCart.push(detailPanier)
      this.productsInCartChanged.emit(this.productsInCart)
      alert("product added successfully :)")
    }
    else{
      detailPanier.quantity++
      this.productsInCartChanged.emit(this.productsInCart)
    }
  }

  isInCart(product: Product){
    return this.productsInCart.find(elt => {
      return elt.product.id === product.id;
    });
  }

  getQuantityInCart(product: Product) {
    const productDetail = this.isInCart(product)
    // @ts-ignore
    return productDetail.quantity;
  }

  getProductsInCart(){
    return this.productsInCartChanged.asObservable()
  }
}
