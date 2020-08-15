import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';

/**
 * RecipeRoutingModule
 *
 * Represents a route configuration for the Recipe module.
 *
 */
const ROUTES: Routes = [
  {
    path: 'view/:id',
    component: RecipeViewComponent,
  },
  {
    path: '',
    component: RecipeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
