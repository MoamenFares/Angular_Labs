import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
ID:number=0;
  constructor(public stdserv:StudentService) { }
  deleteStudent(){
    this.stdserv.deleteStudent(this.ID);
  }
  ngOnInit(): void {
  }

}
