import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import * as CONSTANTS from '../../../constants';
import { TypeRecipe } from 'src/app/interfaces';
import { AppHttpServices } from 'src/app/shared/services';

@Injectable()
export class RecipeService {
  constructor(private appHttp: AppHttpServices) {}

  getAllRecipe(): Observable<TypeRecipe[]> {
    let url = CONSTANTS.getAPIURL() + CONSTANTS.API_ENDPOINTS.getAllrecipe;
    return this.appHttp.httpGet(url);
  }

  getRecipeById(id: number): Observable<TypeRecipe> {
    let url =
      CONSTANTS.getAPIURL() +
      CONSTANTS.API_ENDPOINTS.getRecipeById.replace('##', `${id}`);
    return this.appHttp.httpGet(url);
  }
}
