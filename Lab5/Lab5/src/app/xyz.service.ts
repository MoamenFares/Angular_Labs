import { Injectable } from '@angular/core';
import { filter, interval, map, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XyzService {
myfun(){
  return interval(1000).pipe(
    filter(a=>a<10),
    map(a=>a*2),
  );
//   return new Observable(a=>{
//     setTimeout(() => {
// a.next(10);    }, 1000);
//     setTimeout(() => {
//       a.next(20);
//     }, 2000);
//     // setTimeout(() => {
//     //   a.error("Error occured");
//     // }, 4000);
//     setTimeout(() => {
//       a.next(30);
//     }, 5000);
//     setTimeout(() => {
//       a.complete();
//     }, 6000);
//   })
}
  constructor() { }
}
