import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
baseURL="http://localhost:8080/departments/";
  getAllDepts(){
    return this.http.get<Department[]>(this.baseURL);
  }
  departmentAdd(dept:Department){
    return this.http.post<Department>(this.baseURL,dept);
  }
  getDeptById(id:number){
   return this.http.get<Department>(this.baseURL+id);
  }
  Edit(id:number,dept:Department){
    return this.http.put<Department>(this.baseURL+id,dept);
  }
  delete(id:number){
    return this.http.delete(this.baseURL+id);

  }
  constructor(public http:HttpClient) { }
}
