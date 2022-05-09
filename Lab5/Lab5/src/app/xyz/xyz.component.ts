import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { XyzService } from '../xyz.service';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  constructor(public xyz:XyzService) { }
  sub:Subscription|null=null;
  start(){
  this.sub=this.xyz.myfun().subscribe(a=>{
    console.log(a);
  },
  er=>{
    console.log(er);
  },
  ()=>{
    console.log("Completed")

  }  );
  console.log("start end");
}
stop(){
  this.sub?.unsubscribe();
}
  ngOnInit(): void {
  }

}
