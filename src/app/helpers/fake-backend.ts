import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { TypeRecipe } from '../interfaces';
const recipeList: TypeRecipe[] = [
  {
    id: 1,
    title: 'Bread',
    image: 'https://via.placeholder.com/200',
    description:
      'e the 1500s, when a typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    instructions: [
      'is simply dummy text of the printing and typesett',
      'is simply dummy text of the printing and typesett',
      'is simply dummy text of the printing and typesett',
    ],
    ingredient: [
      {
        value: 200,
        unit: 'gm',
        item: 'onion',
        image: 'https://via.placeholder.com/50',
      },
      {
        value: 500,
        unit: 'ml',
        item: 'water',
        image: 'https://via.placeholder.com/50',
      },
      {
        value: 300,
        unit: 'gm',
        item: 'pepper',
        image: 'https://via.placeholder.com/50',
      },
    ],
  },
  {
    id: 2,
    title: 'Burger',
    image: 'https://via.placeholder.com/200',
    description:
      'is sim, when an unknowas survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
    instructions: [
      'is simply dummy text of the printing and typesett',
      'is simply dummy text of the printing and typesett',
      'is simply dummy text of the printing and typesett',
      'is simply dummy text of the printing and typesett',
      'is simply dummy text of the printing and typesett',
      'is simply dummy text of the printing and typesett',
    ],
    ingredient: [
      {
        value: 200,
        unit: 'gm',
        item: 'onion',
        image: 'https://via.placeholder.com/50',
      },
      {
        value: 500,
        unit: 'ml',
        item: 'water',
        image: 'https://via.placeholder.com/50',
      },
      {
        value: 300,
        unit: 'gm',
        item: 'pepper',
        image: 'https://via.placeholder.com/50',
      },
    ],
  },
  {
    id: 3,
    title: 'Cake',
    image: 'https://via.placeholder.com/200',
    description:
      'is simply dummy text of the printing and typesett ambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essenti ontaining Lorem Ipsum passages',
    instructions: [
      'is simply dummy text of the printing and typesett',
      'is simply dummy text of the printing and typesett',
      'is simply dummy text of the printing and typesett',
      'is simply dummy text of the printing and typesett',
    ],
    ingredient: [
      {
        value: 200,
        unit: 'gm',
        item: 'onion',
        image: 'https://via.placeholder.com/50',
      },
      {
        value: 500,
        unit: 'ml',
        item: 'water',
        image: 'https://via.placeholder.com/50',
      },
      {
        value: 300,
        unit: 'gm',
        item: 'pepper',
        image: 'https://via.placeholder.com/50',
      },
    ],
  },
  {
    id: 4,
    title: 'Salads',
    image: 'https://via.placeholder.com/200',
    description:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr',
    instructions: [
      'is simply dummy text of the printing and typesett',
      'is simply dummy text of the printing and typesett',
      'is simply dummy text of the printing and typesett',
      'is simply dummy text of the printing and typesett',
    ],
    ingredient: [
      {
        value: 200,
        unit: 'gm',
        item: 'onion',
        image: 'https://via.placeholder.com/50',
      },
      {
        value: 500,
        unit: 'ml',
        item: 'water',
        image: 'https://via.placeholder.com/50',
      },
      {
        value: 300,
        unit: 'gm',
        item: 'pepper',
        image: 'https://via.placeholder.com/50',
      },
    ],
  },
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/getAllrecipe') && method === 'GET':
          return getAllrecipe();
        case url.search('getRecipeById') !== -1 && method === 'GET':
          return getAllRecipeById();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    function getAllrecipe() {
      return ok(recipeList);
    }

    function getAllRecipeById() {
      const recipe = recipeList.find((x) => x.id === idFromUrl());
      return ok(recipe);
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function idFromUrl() {
      const urlParts = url.split('?q=');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
