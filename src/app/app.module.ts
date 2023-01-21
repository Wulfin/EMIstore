import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PanierComponent } from './panier/panier.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AuthComponent } from './auth/auth.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { CategoryComponent } from './category/category.component';
import { ListProductCategoryComponent } from './list-product-category/list-product-category.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {PanierService} from "./panier.service";
import { PanierItemComponent } from './panier-item/panier-item.component';
import {FormsModule} from "@angular/forms";
import { ProductsSearchedListComponent } from './products-searched-list/products-searched-list.component';
import { ProfilComponent } from './profil/profil.component';
import { SignInComponent } from './sign-in/sign-in.component';

const appRoutes: Routes = [
  {path : '', component : ListProductsComponent},
  {path : 'details/:id', component : ProductDetailsComponent},
  {path : 'Auth', component : AuthComponent},
  {path : 'panier', component : PanierComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'categoryproducts/:category', component: ListProductCategoryComponent},
  {path: 'search/:searched', component: ProductsSearchedListComponent},
  {path: 'profil', component: ProfilComponent},
  {path: "signIn", component: SignInComponent}
]

@NgModule({
  declarations: [   //list de composants
    AppComponent, ListProductsComponent, ProductItemComponent, PanierComponent, NavbarComponent, ProductDetailsComponent, AuthComponent, CategoryComponent, ListProductCategoryComponent, InscriptionComponent, PanierItemComponent, ProductsSearchedListComponent, ProfilComponent, SignInComponent
  ],
    imports: [        //list des modules
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule
    ],
  providers: [],    //service
  bootstrap: [AppComponent]   //composant lancé au demarrage
})
export class AppModule {}
