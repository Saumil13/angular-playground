import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGERDIENT = 'ADD_INGERDIENT';
export const ADD_INGERDIENTS = 'ADD_INGERDIENTS';

export class AddIngredient implements Action {
  readonly type = ADD_INGERDIENT;

  constructor(public payload: Ingredient) {

  }
}

export class AddIngredients implements Action {
  readonly type = ADD_INGERDIENTS;

  constructor(public payload: Ingredient[]) {

  }
}

export type ShoppingListActions = AddIngredient | AddIngredients;
