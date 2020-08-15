import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SHARED_PIPES } from './pipes';
import { SHARED_COMPONENTS } from './components';
import { SHARED_DIRECTIVES } from './directives';
import { SHARED_GUARDS } from './guards';

import { fakeBackendProvider } from '../helpers/fake-backend';

const SHARED_MODULES: any[] = [
  HttpClientModule,
  CommonModule,
  FormsModule,
  RouterModule,
];

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
    ...SHARED_COMPONENTS,
    ...SHARED_PIPES,
    ...SHARED_DIRECTIVES,
    ...SHARED_GUARDS,

    // provider used to create fake backend
    fakeBackendProvider,
  ],
})
export class SharedModule {}
