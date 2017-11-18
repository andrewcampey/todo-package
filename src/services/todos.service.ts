import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { TodoTask } from '../models/todotask';

@Injectable()
export class TodosService {

  URL = 'https://swapi.co/api/';

  constructor(private _http: HttpClient) { }

  createTask(task: TodoTask) {
    return this._http.post('http://localhost:5879/api/values', task)
    .map(res => {
        return this.readTasks();
      });
  }

  readTasks(): Observable<TodoTask[]>  {
        return this._http.get('http://localhost:5879/api/values')
          .map(res => {
              return new TodoTask({res});
            });
  }

  updateTask(task: TodoTask) {
    return this._http.put('http://localhost:5879/api/values/' + task.taskID, task)
    .map(res => {
        return this.readTasks();
      });
  }

  deleteTask(task: TodoTask) {
    return this._http.delete('http://localhost:5879/api/values/' + task.taskID)
    .map(res => {
        return this.readTasks();
      });
  }
}
