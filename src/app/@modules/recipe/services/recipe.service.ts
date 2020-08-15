import { Injectable } from '@angular/core';
import { AppHttpServices } from '../../../shared/services/app-http-service';
import { Observable } from 'rxjs/internal/Observable';
import * as CONSTANTS from '../../../constants';
import { TypeRecipe } from 'src/app/interfaces';

@Injectable()
export class RecipeService {
  constructor(private appHttp: AppHttpServices) {}

  getAllRecipe(): Observable<TypeRecipe[]> {
    let url = CONSTANTS.getAPIURL() + CONSTANTS.API_ENDPOINTS.getAllrecipe;
    return this.appHttp.httpGet(url);
  }
}
