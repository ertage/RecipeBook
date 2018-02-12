import { Subscription } from 'rxjs/Rx';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from './../shopping-list.services';
import { Ingredient } from './../../models/ingredient.model';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') shoppingListForm: NgForm;


  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startingEdited
      .subscribe(
        (index) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedIngredient = this.shoppingListService.getIngredient(this.editedItemIndex);
          this.shoppingListForm.setValue({
            name: this.editedIngredient.name,
            amount: this.editedIngredient.amount
          })
        }
      )
  }

  addItem(form: NgForm) {
    const formValue = form.value;
    const newIngredient = new Ingredient(formValue.name, formValue.amount)

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }

    this.onClear();
  }

  onClear() {
    this.shoppingListForm.reset()
    this.editMode = false;
  }

  onDelete() {
    this.onClear()
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
