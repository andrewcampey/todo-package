import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { TodoTask, TODOTASKS } from '../models/todotask';

@Injectable()
export class TodosService {

  URL = 'https://swapi.co/api/';

  constructor(private _http: HttpClient) { }

  createTask(task: TodoTask) {
    return TODOTASKS.push(task);
  }

  readTasks()  {
      return TODOTASKS;

      /*
        return this._http.get(this.swapiURL + 'planets/')
          .map(res => {
              return new TodoTask(res);
            });
      */
  }

  updateTask(task: TodoTask) {
    return TODOTASKS;
  }

  deleteTask(task: TodoTask) {
    return TODOTASKS;
  }
}
