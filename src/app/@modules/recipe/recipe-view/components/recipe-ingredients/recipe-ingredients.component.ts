import { Component, OnInit, Input } from '@angular/core';
import { TypeIngredient } from 'src/app/interfaces';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients-component.scss'],
})
export class RecipeIngredientsComponent implements OnInit {
  activeUnit: string = 'metric';
  servings: number = 1;

  @Input() ingredient: TypeIngredient[];
  constructor() {}
  changeUnit(unit: string) {
    this.activeUnit = unit;
  }
  ngOnInit(): void {}
}
