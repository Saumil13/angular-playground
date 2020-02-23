import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Sev puri', 'This is a simple test', 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Sev_puri_1.jpg'),
    new Recipe('Sev puri', 'This is a simple test', 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Sev_puri_1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
