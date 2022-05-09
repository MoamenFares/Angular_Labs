import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailesComponent } from './department-detailes/department-detailes.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
// import { DepartmentDeleteComponent } from './department-delete/department-delete.component';
import {RouterModule, Routes} from '@angular/router';
import { MyLoginGuard } from '../my-login.guard';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {path:"",component:DepartmentListComponent,children:[
    {path:"details",component:DepartmentDetailesComponent},
    {path:"details/:id",component:DepartmentDetailesComponent},
    {path:"Edit/:id",component:DepartmentEditComponent},
    {path:"delete/:id",component:DepartmentEditComponent},

  ],canActivate:[MyLoginGuard]


},
{path:"add",component:DepartmentAddComponent},
{path:"edit",component:DepartmentEditComponent},

];

@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentDetailesComponent,
    DepartmentAddComponent,
    DepartmentEditComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule
  ]
})
export class DepartmentModule { }
