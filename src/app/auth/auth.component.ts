import { Component } from '@angular/core';
import {User} from "../modules/User";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  onSubmit(f: NgForm){
    this.authService.username = f.value["username"]
    this.authService.password = f.value['password']
    this.authService.authenticate()
    this.router.navigate([`profil`])
  }

}
