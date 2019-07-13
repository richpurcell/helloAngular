import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }
  // '/tasks -> Retrieve all Tasks -> GET
  getTasks(){
    return this._http.get('/tasks');
  }
  // '/tasks/:id' -> Retrieve a Task by ID  -> GET
  getOneTask(id: string){
    return this._http.get(`/tasks/${id}`);
  }
  // '/tasks' -> Create a Task -> POST
  postTaskToServer(data){
    return this._http.post('/task', data);
  }
  // '/tasks/:id' -> Update a Task by ID -> PUT

  // '/tasks/:id' -> Delete a Task by ID -> DELETE
  deleteOneTask(id: string){
    let tempObservable = this._http.delete(`/tasks/${id}`);
    tempObservable.subscribe(data => console.log(`Dleted task id: ${id}`, data))
  }
}

