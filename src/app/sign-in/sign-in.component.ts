import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {address, User} from "../modules/User";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  user!: User


  constructor(private authService: AuthService, private router: Router) {

  }

  onSubmit(f: NgForm) {
    this.user = new User(f.value["username"], f.value["email"], f.value["fName"],
      f.value["lName"], "M",
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600",
      "", f.value["password"],"", 0, f.value["phoneN"], "", "",
      90, 89,"", "",new address("", "", "", ""),
      "","", "")
    console.log(this.user)
    this.authService.signUp(this.user)
    this.router.navigate(["profil"])
  }
}
