import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Sev puri', 'This is a sev puri', 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Sev_puri_1.jpg'),
        // tslint:disable-next-line: max-line-length
        new Recipe('Pani puri', 'This is a pani puri', 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sneha-archanaskitchen.com/Aam_Panna_Pani_Puri_Recipe_.jpg')
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }

}
