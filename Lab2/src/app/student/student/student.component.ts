import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_Models/department';
import { Student } from 'src/app/_Models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
std:Student=new Student(1,"Moamen",30,5);
dept:Department=new Department(5,"sd");
NowDate=new Date()
students:Student[]=[
  new Student(1,"Moamen",30,5),
  new Student(2,"Samy",20,4),
  new Student(3,"Mostafa",35,3),
  new Student(4,"Mohamed",20,5)
];
newstd:Student=new Student(1,"",20,100)
Add(){
  this.students.push(  new Student(this.newstd.id,this.newstd.name,this.newstd.age,this.newstd.deptno))
}
DeleteStudent(id:number){
for (let i=0;i<this.students.length;i++){
  if (this.students[i].id==id)  {
    this.students.splice(i,1);
  }
}
}
DetailesStd:Student=new Student(0,"",0,0);
DetailsOfStudent(id:number){
  for (let i=0;i<this.students.length;i++){
    if (this.students[i].id==id)  {
      // console.log(this.students[i]);
      this.DetailesStd=this.students[i];
    }
    }


}
TempStd:Student=new Student(0,"",0,0);
EditStudent(ID:number){
  for(let i=0;i<this.students.length;i++){
    if(this.students[i].id==ID){
      this.TempStd=this.students[i];
    }
  }

}
Edit(id:string,name:string,age:string,Dnum:string){

      let index = this.students.indexOf(this.TempStd);


      this.students[index] = new Student(Number(id),name,Number(age),Number(Dnum));
console.log(this.students);


}
  constructor() { }

  ngOnInit(): void {
  }

}
