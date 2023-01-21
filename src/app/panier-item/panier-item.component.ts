import {Component, Input} from '@angular/core';
import {DetailPanier} from "../modules/DetailPanier";
import {PanierService} from "../panier.service";

@Component({
  selector: 'app-panier-item',
  templateUrl: './panier-item.component.html',
  styleUrls: ['./panier-item.component.css']
})
export class PanierItemComponent {
  @Input() detailPanier!: DetailPanier



  constructor(private panierService: PanierService) {
  }

  addArticle(){
    if(this.detailPanier.quantity>0) this.detailPanier.quantity++;
  }

  removeArticle(){
    if(this.detailPanier.quantity>0) this.detailPanier.quantity--;
    if (this.detailPanier.quantity == 0) {
      let index = this.panierService.productsInCart.indexOf(this.detailPanier)
      this.panierService.productsInCart.splice(index,1)
    }
  }
}

