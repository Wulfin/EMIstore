import {Component, OnInit} from '@angular/core';
import {PanierService} from "../panier.service";
import {DetailPanier} from "../modules/DetailPanier";
import {NgForm} from "@angular/forms";
import {ProductService} from "../product.service";
import {Product} from "../modules/Product";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {User} from "../modules/User";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  cartItems: Array<DetailPanier>
  searched!: string

  getUser(){
    return AuthService.user
  }

  constructor(private panierService: PanierService,
              private productService: ProductService,
              private router: Router,
              private authService: AuthService) {
    this.cartItems = new Array<DetailPanier>()
  }

  ngOnInit(){
    this.panierService.productsInCartChanged.subscribe(
      res=>{
        this.cartItems = res
      })
    this.authService.productsInCartChanged.subscribe(
      res=>{
        this.cartItems = res
      })
  }

  onSubmit(f: NgForm) {
    this.searched = f.value['toSearch']
    console.log(f.value['toSearch'])
    this.router.navigate([`search/${this.searched}`])
  }
}
