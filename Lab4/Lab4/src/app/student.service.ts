import { Injectable } from '@angular/core';
import { Student } from './_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students:Student[]=[
    new Student(1,"Moamen",20),
    new Student(2,"Ahmed",30),
    new Student(3,"Samy",26)
  ]
  getAllStudents():Student[]{
    return this.students;
  }
  addStudent(std:Student){
  this.students.push(std);
  }
  getStudentByID(Id:number){
    return this.students.find(x=>x.id==Id);
  }
  deleteStudent(Id:number){
    // this.students.filter(x=>x.id==Id);

//     Or FindElement (Looping) then splice

for (let i=0;i<this.students.length;i++){
  if (this.students[i].id==Id){
    this.students.splice(i,1);
  }
}

  }
  constructor() { }

}
