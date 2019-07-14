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
  postTaskToServer(data: any){
    return this._http.post('/tasks', data);
  }
  // '/tasks/:id' -> Update a Task by ID -> PUT
  editOneTask(id: string, data: any){
    return this._http.put(`/tasks/${id}`, data);
  }
  // '/tasks/:id' -> Delete a Task by ID -> DELETE
  deleteOneTask(id: string){
    return this._http.delete(`/tasks/${id}`);
  }
}

