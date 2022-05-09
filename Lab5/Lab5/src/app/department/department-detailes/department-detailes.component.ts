import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-detailes',
  templateUrl: './department-detailes.component.html',
  styleUrls: ['./department-detailes.component.css']
})
export class DepartmentDetailesComponent implements OnInit,OnDestroy {
  dept:Department|null=null;
  constructor(public router:Router,public deptser:DepartmentService,public ac:ActivatedRoute) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
  }
  id:number=0;
  sub:Subscription|null=null;
  sub2:Subscription|null=null;
Back(){
  this.router.navigateByUrl("/departments")
}
Search(){
  this.sub=this.deptser.getDeptById(this.id).subscribe(b=>{
    console.log(b);
    this.dept=b;
  })

}
  ngOnInit(): void {
    // this.ac.params.subscribe(a=>{this.id=a['id'];})
   this.sub2= this.ac.params.subscribe(a=>{

      this.deptser.getDeptById(a['id']).subscribe(b=>{
        console.log(b);
        this.dept=b;
      })
      });
  }

}
