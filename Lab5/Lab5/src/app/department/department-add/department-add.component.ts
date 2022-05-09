import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {

  constructor(public deptser:DepartmentService,public router:Router) { }
newdept:Department=new Department(0,"","");
add(){
  // console.log(this.newdept.name);
  this.deptser.departmentAdd(new Department(this.newdept._id,this.newdept.name,this.newdept.location)).subscribe();
  this.router.navigateByUrl("departments");
}

  ngOnInit(): void {
  }

}
