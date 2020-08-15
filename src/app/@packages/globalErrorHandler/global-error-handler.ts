import { ErrorHandler, Injectable } from '@angular/core';

//
//  We can connect to sentry or other error handler here
//
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error) {
    throw error;
  }
}
