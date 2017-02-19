import {Component, OnInit} from '@angular/core'
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {Task} from '../task'

@Component({
  selector :'ShowTask',
  templateUrl: './app/showTask/showTask.component.html'
})

export class ShowTaskComponent implements OnInit {
  constructor(private router: Router,
              private service: AppService) {
  }

  newTask: Task[];

  ngOnInit() {
    this.newTask = this.service.taskArray;
  }

  deleteByIndex(index: number) {
    this.service.delete(index)
    alert('Task Removed')
  }


  editTask(index: number) {
    this.router.navigate(['CreateTask',index])
  }
}
