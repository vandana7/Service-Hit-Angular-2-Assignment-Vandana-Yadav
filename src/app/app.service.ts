import {Injectable} from "@angular/core";
import {Task} from "./task";
@Injectable()

export class AppService {
  taskArray: Task[] = [];

  delete(index: number) {
    this.taskArray.splice(index, 1);
  }

  add(task:Task){
    if (this.taskArray.indexOf(task) == -1) {
      this.taskArray.push(task);
    }
  }

  update(index:number, task:Task){
    if (this.taskArray.indexOf(task) == -1) {
      this.taskArray[index] = task;
    }
  }

}
