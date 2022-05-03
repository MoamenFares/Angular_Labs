import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Department } from 'src/app/_models/department';
// import { deprecate } from 'util';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
@Input("RATE") rating:number=0;
cropwidth=0;
@Output() OnStarClicked:EventEmitter<number>=new EventEmitter<number>();
  constructor() {
    // this.cropwidth=this.rating*75/5;

  }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    this.cropwidth=this.rating*75/5;

  }
  Show(){
    alert("Hi from star comp"+this.rating);
    this.OnStarClicked.emit(this.rating);
  }

}
