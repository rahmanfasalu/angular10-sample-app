import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { TypeRecipe } from 'src/app/interfaces';

@Component({
  selector: 'app-recipe-list',
  template: `<app-recipes [recipeList]="recipeList"> </app-recipes>`,
})
export class RecipeListComponent implements OnInit {
  recipeList: TypeRecipe[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipe().subscribe(
      (response) => {
        this.recipeList = response;
      },
      (error) => {
        console.log('response error');
      }
    );
  }
}
