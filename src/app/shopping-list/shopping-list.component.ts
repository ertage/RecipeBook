import { Subscription } from 'rxjs/Rx';
import { ShoppingListService } from './shopping-list.services';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {

  public ingredients: Ingredient[] = [ ];
  public subscribtion: Subscription;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

   this.subscribtion  =  this.shoppingListService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      })
  }

  onEditItem(index: number) {
    this.shoppingListService.startingEdited.next(index);
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

}
