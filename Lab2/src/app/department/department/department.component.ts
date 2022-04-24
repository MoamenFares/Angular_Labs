import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_Models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  depts:Department[]=[
    new Department(1,"SD"),
    new Department(2,"PD"),
    new Department(3,"OS"),
    new Department(4,"SA")
  ]
  NewDept:Department=new Department(0,"");
  AddDept(){
    this.depts.push(new Department(this.NewDept.id,this.NewDept.name));
  }
  Delete(ID:number){
for (let i=0;i<this.depts.length;i++){
      if (this.depts[i].id==ID){
this.depts.splice(i,1);
      }
    }
  }
  EditDPT:Department=new Department(0,"");

  Edit(ID:number){
    for (let i=0;i<this.depts.length;i++){
      if (this.depts[i].id==ID){
        this.EditDPT=this.depts[i];
      }
    }
  }

  EditDept(ID:any,Name:any){
    let index = this.depts.indexOf(this.EditDPT);


    this.depts[index] = new Department(Number(ID),Name);


  }
  constructor() { }

  ngOnInit(): void {
  }

}
