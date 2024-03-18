import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit  {

  contact:any={}

  constructor( private api:ApiService , private activated:ActivatedRoute){}
  ngOnInit(): void {

    this.activated.params.subscribe((data:any)=>{
      console.log(data);
      const{id}=data
      console.log(id);

      this.viewContact(id)
      
      
    })
    
   
  }


  viewContact(id:any){
    this.api.viewUser(id).subscribe({
      next:(res:any)=>{
        console.log(res);

        this.contact=res


        
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
    
  }

  

}
