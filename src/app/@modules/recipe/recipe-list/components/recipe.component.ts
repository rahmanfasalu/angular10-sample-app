import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TypeRecipe } from 'src/app/interfaces';

/**
 * RecipeComponent
 *
 * Render Single recipe view with image and title;
 *
 */
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeComponent implements OnInit {
  @Input() recipe: TypeRecipe;
  constructor() {}

  ngOnInit(): void {}
}
