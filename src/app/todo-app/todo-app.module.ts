import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import  { TodoappRoutingModule,todoappRoutingComponent } from './todoapp-routing.module';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
 


@NgModule({
  declarations: [
    TodoHeaderComponent,
    todoappRoutingComponent,
    TodoHomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TodoappRoutingModule
  ]
})
export class TodoAppModule { }
