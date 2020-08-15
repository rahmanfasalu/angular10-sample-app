import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SHARED_PIPES } from './pipes';
import { SHARED_COMPONENTS } from './components';
import { SHARED_DIRECTIVES } from './directives';
import { SHARED_GUARDS } from './guards';

import { fakeBackendProvider } from '../helpers/fake-backend';
import { environment } from 'src/environments/environment';
import { GlobalErrorHandler } from '../@packages/globalErrorHandler/global-error-handler';

const SHARED_MODULES: any[] = [
  HttpClientModule,
  CommonModule,
  FormsModule,
  RouterModule,
];

// Prefer moving this to a new module may be core.
let PRODUCTION_ONLY_PROVIDER: any[] = [];
if (environment.production) {
  PRODUCTION_ONLY_PROVIDER = [
    ...PRODUCTION_ONLY_PROVIDER,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ];
}

@NgModule({
  imports: [...SHARED_MODULES],
  declarations: [...SHARED_COMPONENTS, ...SHARED_PIPES, ...SHARED_DIRECTIVES],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS,
    ...SHARED_PIPES,
    ...SHARED_DIRECTIVES,
  ],
  providers: [
    ...SHARED_GUARDS,
    ...PRODUCTION_ONLY_PROVIDER,

    // provider used to create fake backend
    fakeBackendProvider,
  ],
})
export class SharedModule {}
