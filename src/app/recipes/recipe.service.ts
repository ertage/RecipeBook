import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from './../shopping-list/shopping-list.services';
import { Ingredient } from './../models/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable()
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
       0,
      'reecepi 1',
      'my first recipe',
      'http://www.seriouseats.com/recipes/assets_c/2016/12/20161201-crispy-roast-potatoes-29-thumb-1500xauto-435281.jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Meat', 10)
      ]),

    new Recipe(
      1,
      'Burger',
      'my second recipe',
      'https://www.redrobin.com/content/dam/web/menu/tavern-menu/tavern-double-burger-1100.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Meat', 20)
      ])
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipeById(id: number) {
    const newRecipe: Recipe = {
      id: null,
      name: '',
      description: '',
      imageUrl: '',
      ingredients: []
    };
    this.recipes.forEach((recipe: Recipe) => {
      if (recipe.id === id) {
        Object.assign(newRecipe, recipe);
      }
    })

     return newRecipe;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
