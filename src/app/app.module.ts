import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';

import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoAppModule } from './todo-app/todo-app.module';
import { FeaturesComponent } from './features/features.component';
import { TemplatesComponent } from './templates/templates.component';
import { TeamsComponent } from './teams/teams.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    FeaturesComponent,
    TemplatesComponent,
    TeamsComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    TodoAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
