import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CloningComponent } from './modules/cloning/cloning.component';
import { RegisterComponent } from './modules/register/register.component';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"/home"},
  {path:"home",component:HomepageComponent},
  {path:"clone",component:CloningComponent},
  {path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
