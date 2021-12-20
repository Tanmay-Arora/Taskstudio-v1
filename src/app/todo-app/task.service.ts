import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tasks } from '../model/tasks';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}

  url:string = 'http://localhost:3000/tasks';

  addTaskData(data: Tasks){
    this.http.post(this.url, data).subscribe(responseData => {
      console.log(responseData);
    })
  }

  getTaskData() {
    return this.http.get<any>(this.url)
    .pipe(map((res:any)=>{
    return res;
    }))
  }

  deleteTask(id:number)
  {
    let enhancedURL = `${this.url}/${id}`;
    console.log(enhancedURL);
    return this.http.delete<any>(enhancedURL).pipe(map((res:any)=>{
    return res;
    }))
  }
}
