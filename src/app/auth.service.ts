import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./modules/User";
import {Router} from "@angular/router";
import {Product} from "./modules/Product";
import {DetailPanier} from "./modules/DetailPanier";
import {PanierService} from "./panier.service";
import {ResponseUsers} from "./modules/ResponseUsers";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static _user: User | undefined
  private static _userss: Array<User> = [];
  private static _carts: Map<number, Array<DetailPanier>> = new Map(
    Array.from({length: 100}, (_, i) => [i+1, []])
  );
  username!: string;
  password!: string;
  productsInCartChanged = new EventEmitter<Array<DetailPanier>>()

  public static get userss(): Array<User> {
    return this._userss;
  }

  public static set userss(value: Array<User>) {
    this._userss = value;
  }

  public static get user(): User {
    return <User>this._user;
  }

  public static set user(value: User | undefined) {
    this._user = value;
  }

  public static get carts(): Map<number, Array<DetailPanier>> {
    return this._carts;
  }

  public static set carts(value: Map<number, Array<DetailPanier>>) {
    this._carts = value;
  }

  constructor(private http: HttpClient,
              private router: Router, private panService: PanierService) {
    this.getAllUsers();
  }

  /*authenticate(){
    fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: this.username,
      password: this.password
      })
    }).then(res => res.json())
      .then(data => {
        AuthService._user = data
        console.log(data)
        if (data.message == 'Invalid credentials') {
          AuthService._user = undefined
          alert("Wrong username/password")
        }
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }*/
  authenticate() {
    let userAuth = AuthService.userss.find(elt =>
      elt.username === this.username && elt.password === this.password
    )
    console.log(userAuth)
    AuthService.user = userAuth
    // @ts-ignore
    this.panService.productsInCart = AuthService.carts.get(AuthService.user.id)
    this.productsInCartChanged.emit(this.panService.productsInCart)
  }

  logout(){
    AuthService.user = undefined
    this.router.navigate([``])
    this.panService.productsInCart = []
    this.productsInCartChanged.emit(this.panService.productsInCart)
  }

  getAllUsers() {
    fetch('https://dummyjson.com/users?limit=200')
      .then(res => res.json())
      .then((data: ResponseUsers) => {
        AuthService._userss = data.users
        console.log(AuthService.userss)
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

  signUp(user: User) {
    AuthService.userss.push(user)
    AuthService._carts.set(user.id, new Array<DetailPanier>())
    console.log(AuthService.userss)
    console.log(AuthService._carts)
    AuthService.user = user
    // @ts-ignore
    this.panService.productsInCart = AuthService.carts.get(AuthService.user.id)
    this.productsInCartChanged.emit(this.panService.productsInCart)
  }
}
