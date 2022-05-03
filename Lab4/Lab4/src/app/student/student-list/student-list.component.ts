import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  // providers:[StudentService]
})
export class StudentListComponent implements OnInit {
students:Student[]=[];
  constructor(public stdServ:StudentService) { }

  ngOnInit(): void {
this.students=this.stdServ.getAllStudents();
  }

}
