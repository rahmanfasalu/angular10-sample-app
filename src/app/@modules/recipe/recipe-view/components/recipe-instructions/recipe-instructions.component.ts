import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeInstructionsComponent implements OnInit {
  @Input() instructions: string;
  constructor() {}
  ngOnInit(): void {}
}
