import {Product} from "./Product";

export class DetailPanier {
  product : Product;
  quantity : number;

  public constructor(product : Product ,quantity : number) {
    this.product = product;
    this.quantity=quantity;
  }


}
