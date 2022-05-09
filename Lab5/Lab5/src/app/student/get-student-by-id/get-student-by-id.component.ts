import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-get-student-by-id',
  templateUrl: './get-student-by-id.component.html',
  styleUrls: ['./get-student-by-id.component.css']
})
export class GetStudentByIdComponent implements OnInit {
ID:number=0;
std:any;
constructor(public stdServ:StudentService) { }
findStd(){
  this.std=this.stdServ.getStudentByID(this.ID);
  console.log(this.std);
}

  ngOnInit(): void {
  }

}
