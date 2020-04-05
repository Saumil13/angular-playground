import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {

  }

  private recipes: Recipe[] = [
    new Recipe('Sev puri', 'This is a sev puri', 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Sev_puri_1.jpg', [
      new Ingredient('Sev', 100),
      new Ingredient('Puri', 10),
      new Ingredient('Potatoes', 5)
    ]),

    // tslint:disable-next-line: max-line-length
    new Recipe('Pani puri', 'This is a pani puri', 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sneha-archanaskitchen.com/Aam_Panna_Pani_Puri_Recipe_.jpg',
      [
        new Ingredient('Pani', 5),
        new Ingredient('Puri', 10),
        new Ingredient('Tomatoes', 5)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
    this.recipeChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }


}
