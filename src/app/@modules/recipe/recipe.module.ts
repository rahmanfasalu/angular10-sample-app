import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from 'src/app/shared';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';

import { RecipesComponent } from './recipe-list/components/recipes.component';
import { RecipeComponent } from './recipe-list/components/recipe.component';
import {
  RecipeInfoComponent,
  RecipeIngredientsComponent,
  RecipeInstructionsComponent,
} from './recipe-view/components';
// Services
import { RecipeService } from './services/recipe.service';
/**
 * Type of the NgModule: RecipeModule
 *
 * Module for th
 */
@NgModule({
  declarations: [
    RecipesComponent,
    RecipeComponent,
    RecipeInfoComponent,
    RecipeIngredientsComponent,
    RecipeInstructionsComponent,

    RecipeListComponent,
    RecipeViewComponent,
  ],
  imports: [CommonModule, SharedModule, RecipeRoutingModule],
  exports: [RecipeRoutingModule],
  providers: [RecipeService],
})
export class RecipeModule {}
