import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoTask } from './models/todotask';

export * from './models/todotask';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TodoTask
  ],
  exports: [
    TodoTask
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: []
    };
  }
}
