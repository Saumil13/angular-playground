import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';


export class ShoppingListService {
    ingredientChange = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Sev', 5),
        new Ingredient('Puri', 10)
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChange.next(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (const ingredient of ingredients) {
        //     this.onAddIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientChange.next(this.ingredients.slice());
    }

}
