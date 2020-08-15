import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { TypeRecipe } from 'src/app/interfaces';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
})
export class RecipeViewComponent implements OnInit {
  recipe: TypeRecipe;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipeById(id).subscribe((response: TypeRecipe) => {
      this.recipe = response;
    });
  }
}
