import { Component } from '@angular/core';
import { userSchema } from '../user.model.ts';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user:userSchema={}

  constructor(private api:ApiService){}

  addUser(){

    const{id,name,email,mobile,company,title}=this.user

    if(!id||!name||!email||!mobile||!company||!title){
      alert("please fii the form")
    }
    else{
      // alert("save button click")

      this.api.addUser(this.user).subscribe({
        next:(res:any)=>{
          console.log(res);
          
          alert("new user added")
        },
        error(err:any) {

          console.log(err);
          
          alert("canot perform the action now")
          
        }
      })
    }

  }


  cancel(){
    this.user={}
  }

}
