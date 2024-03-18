import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { userSchema } from '../user.model.ts';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user:userSchema={}

  constructor(private rout:ActivatedRoute, private api:ApiService){}
  ngOnInit(): void {

    this.existingUser(this.user.id)
  
  }

  existingUser(id:any){

    this.rout.params.subscribe((res:any)=>{
      console.log(res);

      const {id}=res
      console.log(id);

      this.api.getexisting(id).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.user=res
          
        },
        error:(err:any)=>{
          console.log(err);
          
        }
        
        
      })
      
      
    }

    )

  }




  updateUser(){
    this.api.updateUser(this.user.id,this.user).subscribe({

      next:(res:any)=>{
        console.log(res);
        alert("updated successfully")
        
      },
      error:(err:any)=>{
        console.log(err);
        alert("can not perform the action now")
        
      }
    })
  }

  cancelUpdate(userId:any){
    this.existingUser(userId)
  }

}
