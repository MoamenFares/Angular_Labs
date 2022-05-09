import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentDetailesComponent } from './department/department-detailes/department-detailes.component';
import { DepartmentEditComponent } from './department/department-edit/department-edit.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"about",component:AboutUsComponent},
  {path:"students",component:StudentListComponent,children:[
{path:"details2/:id",component:StudentDetailsComponent}
]},
{path:"departments",loadChildren:()=>import('./department/department.module').then(a=>a.DepartmentModule)},

  {path:"students/add",component:AddStudentComponent},
  {path:"students/details/:id",component:StudentDetailsComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
