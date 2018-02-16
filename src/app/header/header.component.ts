import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { StoreService } from './../common/services/store.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from './../models/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  recipes: Recipe[];

  constructor(private storeService: StoreService,
              private recipeService: RecipeService) {

  }
  onSaveData() {
    this.storeService.saveRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.storeService.getRecipes()
  }
}
