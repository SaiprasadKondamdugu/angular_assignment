import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  service: any;

  constructor(private _http:HttpClient) { }
   
  // define POST,GET,PUT,DELETE 
  //post method
  postRestaurant(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{return res;}) )
  }
  
  //Get Method
  getRestaurant(){
    return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{return res;}))
  }

  //Update Menthod
  updateRestaurant(data:any,id:number){
    return this._http.put<any>("http://localhost:3000/posts"+id,data).pipe(map((res:any)=>{return res;}))
  }

  //Delete Method
  deleteRestaurant(id:number){
    return this._http.delete<any>("http://localhost:3000/posts"+id).pipe(map((res:any)=>{return res;}))
  }
}