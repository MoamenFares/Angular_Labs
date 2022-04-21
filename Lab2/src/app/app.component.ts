import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title="Day2"
  Show(){
    console.log("Button Clicked")
  }

  ShowMyName(){
    console.log("MOAMEN")
  }

  Display(e:any){
    console.log(e.target.value)
  }

  DisplayAnyChange(v:any){
    console.log(v)
  }

  ShowString(v:string){
    console.log(v)
  }

  ValidateFun(v:any){
    // This Function is for Validation
    console.log(v);
  }

  ChangeTitle(t2:string){
    // Two way Binding
    this.title=t2;
  }

}
