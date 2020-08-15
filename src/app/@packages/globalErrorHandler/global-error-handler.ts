import { ErrorHandler, Injectable } from '@angular/core';

//
//  For connect to sentry or other global error handler
//
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error) {
    throw error;
  }
}
