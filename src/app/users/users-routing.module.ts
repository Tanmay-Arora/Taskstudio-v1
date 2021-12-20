import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { SecQuestionComponent } from "./sec-question/sec-question.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { UsersComponent } from "./users.component";
import { RegisterGuard } from "../register.guard";


const routes: Routes = [
    { path: 'users', component: UsersComponent, pathMatch: 'prefix',
      children: [
        {path: 'login', component: LoginComponent},
        {path: 'signup', component: SignupComponent},
        {path: 'securityQuestions', component: SecQuestionComponent, canActivate: [RegisterGuard]},
        {path: 'forgotPassword', component:ForgotPasswordComponent}
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule {}
export const userRoutingComponent = [UsersComponent, SignupComponent, LoginComponent, SecQuestionComponent, ForgotPasswordComponent];

