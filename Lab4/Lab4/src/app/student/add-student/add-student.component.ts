import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  // providers: [StudentService]
})
export class AddStudentComponent implements OnInit {
std:Student=new Student(0,"",0);
  constructor(public stdServ:StudentService,public router:Router) { }
addStudent(){
this.stdServ.addStudent(this.std);
this.router.navigate(['/students'])
}
  ngOnInit(): void {
  }

}
