import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 nameControl=new FormControl('');
 dummyName : string = 'Initail Name';
 dummyName1 : string = 'Initail Name';
 isLoginData:boolean=false;

 updateName(){
   this.dummyName= this.nameControl.value
 }



 loginForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
 })
 onSubmit(){
   this.isLoginData = true;
   this.dummyName1 = "First Name : " + this.loginForm.value.firstName+ 
                     " ||  Last name : " + this.loginForm.value.lastName;
  console.log(this.loginForm.value)
 }
}

