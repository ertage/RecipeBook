import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';
// import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  // selsectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected
    //   .subscribe(
    //     (recipe: Recipe) => {
    //       this.selsectedRecipe = recipe;
    //     }
    //   )
  }

}
