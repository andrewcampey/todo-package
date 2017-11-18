import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoTask } from './models/todotask';

import { TodosService } from './services/todos.service';

export * from './models/todotask';
export *  from './services/todos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TodoTask,
    TodosService
  ],
  exports: [
    TodoTask,
    TodosService
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
