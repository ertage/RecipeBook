import { ActivatedRoute, Params, Router } from '@angular/router';
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
  recipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    const recipeId = +this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipeById(recipeId);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']
          this.recipe = this.recipeService.getRecipeById(this.id);
        }
      )
  }

  toShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)
  }

  goToEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
