import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  x=80;
  n=2;
  name="Moamen"
  imgsrc="assets/1.jpg"
  imgalt="this pic not found"
  constructor() {
    this.x=30;
   }
   changeName(){
     if(this.name=="Moamen"){
       this.name="Fares"
     }
     else{
      this.name="Moamen"

     }

   }
  ngOnInit(): void {
  }

}
