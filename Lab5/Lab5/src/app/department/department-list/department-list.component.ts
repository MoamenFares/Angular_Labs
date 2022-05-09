import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit,OnDestroy {

  constructor(public router:Router,public deptser:DepartmentService) { }
  ngOnDestroy(): void {
   this.sub?.unsubscribe();
  }
Details(){
  this.router.navigateByUrl("/departments/details");

}

Edit(){
  this.router.navigateByUrl("/departments/edit");
}
 depts:Department[]=[];
 idd:number=1;
 sub:Subscription|null=null;
  ngOnInit(): void {
   this.sub= this.deptser.getAllDepts().subscribe(a=>{this.depts=a});
    // console.log(this);
  }

}
