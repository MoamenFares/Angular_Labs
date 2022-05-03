import { Component } from '@angular/core';
import { Department } from './_models/department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab3';
dept:Department=new Department(1,"sd",4);
depts:Department[]=[
  new Department(1,"SD",3),
  new Department(2,"PD",4),
  new Department(3,"SA",5)
]
ShowMsg(d:number){
  alert("Hi from app comp"+d);

}
}
