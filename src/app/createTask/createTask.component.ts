import {Component, OnInit} from '@angular/core'
import {Task} from "../task";
import {AppService} from "../app.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector :'CreateTask',
  templateUrl: './app/createTask/createTask.component.html'

})

export class CreateTaskComponent implements OnInit {

  index: number;

  task: Task = new Task(null,'', '', '', '');

  constructor(private service: AppService,
              private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.index = +data.indexSent;
      if (this.index || this.index === 0) {
        this.task = this.service.taskArray[this.index];
      }
    });
  }

  addTask() {
    if (this.index) {
      this.service.update(this.index, this.task);
    } else {
      this.service.add(this.task);

      this.router.navigate(['ShowTask']);
    }

  }

}
