import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { GetStudentByIdComponent } from './get-student-by-id/get-student-by-id.component';
import { AppRoutingModule } from '../app-routing.module';
import { StudentDetailsComponent } from './student-details/student-details.component';



@NgModule({
  declarations: [
    StudentListComponent,
    AddStudentComponent,
    DeleteStudentComponent,
    GetStudentByIdComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule,AppRoutingModule
  ],
  exports:[StudentListComponent,AddStudentComponent,DeleteStudentComponent,GetStudentByIdComponent
  ]
})
export class StudentModule { }
