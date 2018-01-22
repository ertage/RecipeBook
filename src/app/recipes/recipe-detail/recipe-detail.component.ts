import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.services';
import { Ingredient } from './../../models/ingredient.model';
import { Recipe } from './../../models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService,
  private RecipeService: RecipeService) { }

  ngOnInit() {
  }

  toShoppingList() {
    this.RecipeService.addIngredientToShoppingList(this.recipe.ingredients)
  }
}
