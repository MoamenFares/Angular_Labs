import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_Models/department';
import { Student } from 'src/app/_Models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
std:Student=new Student(1,"Moamen",30,5);
dept:Department=new Department(5,"sd");
NowDate=new Date()
students:Student[]=[
  new Student(1,"Moamen",30,5),
  new Student(2,"Samy",20,4),
  new Student(3,"Mostafa",35,3),
  new Student(4,"Mohamed",20,5)
];
newstd:Student=new Student(1,"",20,100)
Add(){
  this.students.push(  new Student(this.newstd.id,this.newstd.name,this.newstd.age,this.newstd.deptno))
}
  constructor() { }

  ngOnInit(): void {
  }

}
