import {Product} from "./Product";

export class ResponseAmazon{
  products : Array<Product> = [];

  public constructor(products: Array<Product>) {
    this.products = products;
  }
}
