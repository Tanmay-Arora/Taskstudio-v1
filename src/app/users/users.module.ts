import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { userRoutingComponent } from './users-routing.module';

@NgModule({
  declarations: [
    userRoutingComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class UsersModule { }
