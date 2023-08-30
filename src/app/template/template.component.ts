import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
      Email:string='';
      Password:string="";
      InputAddress1:string="";
      InputAddress2:string="";
      InputCity:string="";
      InputState:string="";
      Inputzip:string="";
      InputCheck:boolean=false;

      onSumbit(LogIn:NgForm){
        console.log(LogIn);
        

      }
      reset( LogIn:NgForm ){
        LogIn.reset();
     }
    
     SetValues(LogIn:NgForm){
      let user={
            Email:"Sivakrishna",
            Password:"123456",
            inputAddress1:"39 b",
            inputAddress2:"Vengal Rao Nagar",
            inputCity:"Hyderabad",
            inputState:"3",
            inputZip:"500038",
            formcheck:true
      }
      LogIn.setValue(user);
     }
}
