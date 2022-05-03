import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{

std:Student|null=new Student(0,"",0);
  constructor(public ar:ActivatedRoute,public stdServ:StudentService) { }

  ngOnInit(): void {
    let id=0
    this.ar.params.subscribe(
      a=>{
        id=a['id'];
        this.std=this.stdServ.getStudentByID(id)??new Student(0,"",0);
  }
    )
}}
