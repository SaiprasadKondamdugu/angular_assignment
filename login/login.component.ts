import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { StudentDataService } from '../service/student-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //email:["",validators.required],
  //password:string="";
 // warning : string = "";
  // password : string;
 loginform! : any;
 adminData! : any;
 studentData! :any;

  constructor(private _fb :FormBuilder,private _adminData :StudentDataService,private _studenData: StudentDataService, private router: Router) { }

  ngOnInit():void{
    this.loginform= this._fb.group({
      userName:['',[Validators.required,Validators.email,Validators.minLength(6)]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }


  onFormSubmit(){
    console.log(this.loginform)
    this.adminData=this._adminData.getAdminCred();
    console.log(this.adminData);
    this.studentData =this._studenData.getStudentCred();
    console.log(this.studentData);

    if(this.loginform.value.userName === this.adminData.username && this.loginform.value.password===this.adminData.password){
      this.router.navigate(['admin']);
    }else if(this.loginform.value.userName===this.studentData.username && this.loginform.value.password===this.studentData.password){
      this.router.navigate(['student']);
  }
  this.loginform.reset();
}
goToHome(){

}
}

  
  /*goToHome(){
    if(this.email === "student@123.com" && this.password === "student"){
      this.router.navigate(['student']);
      console.log('LogedIn! as user');
    } else if (this.email === "admin@123.com" && this.password === "admin"){
      this.router.navigate(['admin'])
      console.log('LogedIn! as a Admin');
    } else {
      this.warning = "Please enter valid Details"
    }
  }

  ngOnInit(): void {
  }
  */
