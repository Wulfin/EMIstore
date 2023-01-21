import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../modules/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";
import {PanierService} from "../panier.service";


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  isInCartB!: boolean

  @Input() product!: Product;
  @Output() productSelected = new EventEmitter<Product>();

  ngOnInit(): void {
    this.isInCartB = !!this.isInCart()
  }

  constructor(private router: Router,
              private pSer: ProductService,
              private panService: PanierService) {
  }

  addToCart(product: Product) {
    this.productSelected.emit(this.product);
    this.panService.addToCart(product);
  }

  isInCart(){
    return this.panService.isInCart(this.product);
  }

  getQuantityInCart(){
    return this.panService.getQuantityInCart(this.product);
  }

  showDetails(id: number) {
    this.router.navigate([`details/${id}`])
  }
}

