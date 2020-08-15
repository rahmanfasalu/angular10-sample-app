import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from 'src/app/shared';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';

import { RecipesComponent } from './recipe-list/components/recipes.component';
import { RecipeComponent } from './recipe-list/components/recipe.component';

// Services
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeViewComponent,
    RecipesComponent,
    RecipeComponent,
  ],
  imports: [CommonModule, SharedModule, RecipeRoutingModule],
  providers: [RecipeService],
})
export class RecipeModule {}
