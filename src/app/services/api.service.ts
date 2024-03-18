import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userSchema } from '../modules/users/user.model.ts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url:string="http://localhost:3000"

  constructor(private http:HttpClient) { }


  getallUsers(){
   return this.http.get(`${this.base_url}/contacts`)
  }

  addUser(user:userSchema){

  return this.http.post(`${this.base_url}/contacts`,user)

  }

  getexisting(id:any){
   return this.http.get(`${this.base_url}/contacts/${id}`)
  }

  updateUser(id:any,data:userSchema){
    return this.http.put(`${this.base_url}/contacts/${id}`,data)
  }

  deleteUser(id:any){
    return this.http.delete(`${this.base_url}/contacts/${id}`)
  }

  viewUser(id:any){
    return this.http.get(`${this.base_url}/contacts/${id}`)
  }


}
