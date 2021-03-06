import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  oneTask: any;
  tasks: Object;
  aTask: Object;
  new_task: any;
  edit: any;
  show: boolean;
  selectedTask: any;
  tasktoShow: any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.tasks = [];
    this.new_task = {title: "", description: "" };
    this.getTasksFromService();
    this.show = false;
    this.edit = {title: "", description: ""}
  }
  getTasksFromService(){ // I think this is DONE!
    let observable = this._httpService.getTasks();
    observable.subscribe(data => { // can also say obsevable.then(data = {}) then finish off with .catch()
      this.tasks = data.reverse();
    });
  }
  taskToShow(aTask: any){
    this.selectedTask = aTask;
  }
  showTask(id: string) { // I think this is DONE!
    this.oneTask = id; // Narrowed down to this line
    this.show = true;
    let observable = this._httpService.getOneTask(id);
    observable.subscribe(data => {
      this.edit = data;
      // console.log(data)
    });
  }
  newTask(){ // I think this is DONE!
    let observable = this._httpService.postTaskToServer(this.new_task);
    observable.subscribe(data => {
      this.new_task = {title: "", description: "" };
      this.getTasksFromService();
    });
  }
  editTask(id: string){ // I think this is DONE!
    this.oneTask = id;
    let observable = this._httpService.editOneTask(this.edit.id, this.edit);
    observable.subscribe(data => {
      this.edit = {title: "", description: "" };
      this.getTasksFromService();
    });
  }
  deleteTask(id: string){ // I think this is DONE!
    let observable = this._httpService.deleteOneTask(id);
    observable.subscribe(data => {
      this.getTasksFromService();
    });
  }
}
