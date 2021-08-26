import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { RegisterClassComponent } from './home/register-class/register-class.component';
import { RegisterEstudentComponent } from './home/register-estudent/register-estudent.component';
import { RegisterSubjectComponent } from './home/register-subject/register-subject.component';
import { RegisterTeacherComponent } from './home/register-teacher/register-teacher.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'register-class', component: RegisterClassComponent, pathMatch: 'full' },
  { path: 'register-estudent', component: RegisterEstudentComponent, pathMatch: 'full' },
  { path: 'register-subject', component: RegisterSubjectComponent, pathMatch: 'full' },
  { path: 'register-teacher', component: RegisterTeacherComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
