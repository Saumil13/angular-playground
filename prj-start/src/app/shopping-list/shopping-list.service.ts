import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService {
  startedEditing = new Subject<number>();
  ingredientChange = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Sev', 5),
    new Ingredient('Puri', 10)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChange.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientChange.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (const ingredient of ingredients) {
    //     this.onAddIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.ingredientChange.next(this.ingredients.slice());
  }

}
