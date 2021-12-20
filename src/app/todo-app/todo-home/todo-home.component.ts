import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Tasks } from 'src/app/model/tasks';
import { FlexadjustService } from '../flexadjust.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent implements OnInit{

  constructor(private _flexAdjust: FlexadjustService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private _taskService: TaskService) { }

  taskFormVisible = false

  todayDate: number = Date.now();

  taskArray: Tasks[] = [];

  taskData!:Tasks;

  taskForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['']
  })

  get name(){
    return this.taskForm.get('name');
  }

  get description(){
    return this.taskForm.get('description');
  }

  addTaskForm(){
    this.taskFormVisible = true;
  }

  removeTaskForm() {
    this.taskFormVisible = false;
  }

  deleteTask(id: number){
    this._taskService.deleteTask(id).subscribe(
      response => console.log('Success', response),
      error => console.log('Error', error)
    )
    setTimeout(() => {
      this.fetchTasks()
    }, 500);
  }

  onSubmit(){
    console.log('Submitted');
    console.log(this.name?.value + ' ' + this.description?.value);
    this.taskData = new Tasks(this.name?.value, this.description?.value);
    this._taskService.addTaskData(this.taskData);
    
    this.taskForm.reset();
    this.fetchTasks();
  }


    fetchTasks(){
      this.taskArray = [];
      this._taskService.getTaskData().subscribe((res) => {
        this.taskArray = res;
      });
    }

  ngOnInit() {
    this.fetchTasks();
  }
  

}

