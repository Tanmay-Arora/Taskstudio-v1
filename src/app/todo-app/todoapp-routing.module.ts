import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { TodoHomeComponent } from "./todo-home/todo-home.component";
import { TodoAppComponent } from "./todoapp.component";


const routes: Routes = [
    { path: 'app', component: TodoAppComponent, pathMatch: 'prefix', canActivate: [AuthGuard],
      children: [
          {path: 'home', component: TodoHomeComponent}
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TodoappRoutingModule {}
export const todoappRoutingComponent = [TodoAppComponent, TodoHomeComponent];

