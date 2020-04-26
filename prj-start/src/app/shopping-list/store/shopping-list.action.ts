import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGERDIENT = 'ADD_INGERDIENT';

export class AddIngredient implements Action {
  readonly type = ADD_INGERDIENT;

  constructor(public payload: Ingredient) {

  }

}
