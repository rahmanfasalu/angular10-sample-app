import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TypeRecipe } from 'src/app/interfaces';

/**
 * RecipesComponent
 *
 * Render list od recipe, added router link to navigate to the view page.
 *
 */
@Component({
  selector: 'app-recipes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./recipe-component.scss'],
  template: `
    <a *ngFor="let recipe of recipeList" [routerLink]="['view', recipe.id]">
      <app-recipe [recipe]="recipe"></app-recipe>
    </a>
  `,
})
export class RecipesComponent implements OnInit {
  @Input() recipeList: TypeRecipe[];
  ngOnInit(): void {}
}
