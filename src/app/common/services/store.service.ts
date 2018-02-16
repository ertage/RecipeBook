import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { RecipeService } from './../../recipes/recipe.service';
import { Recipe } from './../../models/recipe.model';

@Injectable()
export class StoreService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService) {
  }

  saveRecipes(): Observable<any> {
    const recipes = this.recipeService.getRecipes();
    const url = 'https://my-recipe-book-8c714.firebaseio.com/recipes.json';

    return this.http.put(url, recipes);
  }

  getRecipes() {
    const url = 'https://my-recipe-book-8c714.firebaseio.com/recipes.json';

    return this.http.get(url)
      .map(
        (response: Recipe[]) => {
          const recipes: Recipe[] = response;
          recipes.forEach(
            (recipe) => {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
          )
           return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      )
  }
}
