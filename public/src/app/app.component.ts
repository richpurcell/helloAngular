import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'MEAN';
  showList: boolean;
  oneTask: boolean;
  tasks = [];
  aTask: [];
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.showList = false;
    this.oneTask = false;
  }
  getTasksFromService(){
    this.showList = true;
    let observable = this._httpService.getTasks();
    observable.subscribe(data => { // can also say obsevable.then(data = {}) then finish off with .catch()
      this.tasks = data;
    });
  }
  onButtonClickParam(id: string) {
    console.log('Click event is working with param');
    let observable = this._httpService.postTaskToServer(id);
    observable.subscribe(id => console.log("Got our data", id));
  }
  showTask(id: string) {
    this.oneTask = true;
    let observable = this._httpService.getOneTask(id);
    observable.subscribe(data => {
      this.aTask = data;
    });
  }
}
