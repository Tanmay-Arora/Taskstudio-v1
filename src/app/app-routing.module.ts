import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLandingComponent } from './app-landing/app-landing.component';

const routes: Routes = [
  {path: '', redirectTo:'/landing', pathMatch: 'full'},
  {path: 'landing', component: AppLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppLandingComponent]
