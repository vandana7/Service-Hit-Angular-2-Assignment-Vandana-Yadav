export class Task {
  taskId: number;
  taskDate: string
  taskTitle: string;
  taskDescription: string;
  taskPriority: string;

  constructor( taskId?: number,taskDate?: string,  taskTitle?: string, taskDescription?: string, taskPriority?: string) {

    if (taskId && taskDate && taskTitle && taskDescription && taskPriority) {
      this.taskId = taskId
      this.taskDate = taskDate;
      this.taskTitle = taskTitle;
      this.taskDescription = taskDescription;
      this.taskPriority = taskPriority;
    }

    else {
      this.taskId=null;
      this.taskDate = '';
      this.taskTitle = '';
      this.taskDescription = '';
      this.taskPriority = '';

    }

  }
}
