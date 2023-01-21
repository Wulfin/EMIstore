import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../modules/User";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  user!: User;

  /*onSubmit(form: NgForm){
    this.user = this.register(form);
    console.log(this.user);
  }

  /!*register(form: NgForm) {
    console.log(form.value);

    return new User(form.value['username'], form.value['password'],
      form.value['prenom'], form.value['nom'], form.value['email'])
  }*!/*/
}
