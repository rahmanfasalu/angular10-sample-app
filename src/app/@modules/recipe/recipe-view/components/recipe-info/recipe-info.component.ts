import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

/**
 * RecipeInfoComponent
 *
 * Child of recipe view page, This component will render recipe title, image and description.
 *
 */
@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeInfoComponent implements OnInit {
  @Input() image: string;
  @Input() description: string;
  @Input() name: string;
  constructor() {}
  ngOnInit(): void {}
}
