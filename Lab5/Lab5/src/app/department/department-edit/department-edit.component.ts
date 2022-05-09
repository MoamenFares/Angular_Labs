import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit,OnChanges {

  constructor(public router:Router,public deptser:DepartmentService,public ac:ActivatedRoute) {

   }
  ngOnChanges(changes: SimpleChanges): void {


  }
  dept:Department=new Department(0,"","");
  id:number=0;
  save(){
    console.log(this.dept._id);
    console.log(this.dept.name);
    console.log(this.dept.location);

this.deptser.Edit(this.id,this.dept);
this.router.navigateByUrl("/departments")

  }
Back(){
  this.router.navigateByUrl("/departments")
}
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{this.id=a['id']});
    this.deptser.getDeptById(this.id).subscribe(a=>{this.dept=a;})
    console.log(this.id);
    console.log(this.dept?.name);


  }

}
