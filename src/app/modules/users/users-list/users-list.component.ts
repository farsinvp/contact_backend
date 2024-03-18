import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { userSchema } from '../user.model.ts';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  allusers:userSchema[]=[]

  constructor( private api:ApiService){}


  ngOnInit(): void {

  this.getUserList()
   
  }



  //display all users from json file



  getUserList(){

    this.api.getallUsers().subscribe({
      next:(result:any)=>{
        console.log(result);
        this.allusers=result
        
      },
      error:(res:any)=>{
        console.log(res);
        
      }
    })


  }


  deleteData(id:any){
    this.api.deleteUser(id).subscribe({
      next:(res:any)=>{
        this.getUserList()
      },
      error:(err:any)=>{
        alert("can not perform the action now")
      }
    })
  }







  

}
