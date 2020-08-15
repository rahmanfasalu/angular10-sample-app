import { Component, OnInit, Input } from '@angular/core';
import { TypeIngredient } from 'src/app/interfaces';

/**
 * RecipeIngredientsComponent
 *
 * Child of recipe view page, This component will render the recipe ingrediants.
 * Used the following common components
 *  app-button : App common button component,  ref : Shared Module
 *  app-commom-list: App common item row component, ref : Shared Module
 *
 */
@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients-component.scss'],
})
export class RecipeIngredientsComponent {
  activeUnit: string = 'metric';
  servings: number = 1;
  @Input() ingredient: TypeIngredient[];

  constructor() {}
  changeUnit(unit: string) {
    this.activeUnit = unit;
  }
}
