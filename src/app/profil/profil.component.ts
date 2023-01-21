import {Component, EventEmitter} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {PanierService} from "../panier.service";
import {DetailPanier} from "../modules/DetailPanier";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  productsInCartChanged = new EventEmitter<Array<DetailPanier>>()

  getUser(){
    return AuthService.user
  }

  logout(){
    this.authService.logout()
  }

  constructor(private authService: AuthService,
              private router: Router,
              private panService: PanierService) {
  }
}
