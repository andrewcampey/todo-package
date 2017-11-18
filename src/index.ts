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
export class TodoTaskModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoTaskModule,
      providers: []
    };
  }
}
