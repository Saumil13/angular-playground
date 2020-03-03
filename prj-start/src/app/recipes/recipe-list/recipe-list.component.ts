import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Sev puri', 'This is a sev puri', 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Sev_puri_1.jpg'),
    // tslint:disable-next-line: max-line-length
    new Recipe('Pani puri', 'This is a pani puri', 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sneha-archanaskitchen.com/Aam_Panna_Pani_Puri_Recipe_.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
