import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TypeRecipe } from 'src/app/interfaces';

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
