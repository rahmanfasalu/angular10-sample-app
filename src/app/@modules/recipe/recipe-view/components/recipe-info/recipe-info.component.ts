import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

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
