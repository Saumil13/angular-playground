import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  startedEditingSubscription: Subscription;
  isEditMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  @ViewChild('f', { static: false }) slForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.isEditMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);

      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.isEditMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.isEditMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.isEditMode = false;
  }

  onDelete() {
    this.onClear();
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
  }

  ngOnDestroy() {
    this.startedEditingSubscription.unsubscribe();
  }
}
