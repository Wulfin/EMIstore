import { Component } from '@angular/core';
import {CategoryService} from "../category.service";
import {ResponseAmazon} from "../modules/ResponseAmazon";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories!: string[]

  constructor(private cSer: CategoryService, private route: Router) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories(): void {
    this.cSer.getCategories().subscribe(
      (response: string[]) => {
        this.categories = response;
        console.log(this.categories);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onClickCategory(category: string) {
    this.route.navigate([`categoryproducts/${category}`])
  }
}
