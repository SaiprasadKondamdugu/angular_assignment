import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './restaurent.modal';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.scss'],
})
export class RestaurentDashComponent implements OnInit {

  formValue!: FormGroup
  restaurentModelObj:RestaurantData = new RestaurantData;
  apiservice: any;
  allRestaurantData: any;
  showAdd!:boolean;
  showbtn!:boolean;

  constructor(private formBuilder: FormBuilder,private api:ApiService ) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
      
    })
    this.getAllData()
  }
  clickAddResto(){
    this.formValue.reset();
    this.showAdd=true;
    this.showbtn=false;
  }
  
  //Subscribing our data which is maped via Services...
  addResto(){  
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;

    this.api.postRestaurant(this.restaurentModelObj).subscribe((res: any)=>{
      console.log(res);
      alert("Restaurant Records Added Successfull");
      //clear Form 
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset()
      this.getAllData();
    },
    err=>{
      alert("Something went Wrong")
    }
    )
  
  }
  //Get All Data
getAllData(){
  this.api.getRestaurant().subscribe(res=>{
    this.allRestaurantData= res;
  })
}


// delete 
deleteResto(data:any){
  this.api.deleteRestaurant(data.id).subscribe(res=>{
    alert("Restaurant Records Deleted ")
    this.getAllData();

  })
}
//Edit data
EditResto(data:any){
  this.showAdd=false;
  this.showbtn=true;
  this.restaurentModelObj.id = data.id
  this.formValue.controls['name'].setValue(data.name);
  this.formValue.controls['email'].setValue(data.email);
  this.formValue.controls['mobile'].setValue(data.mobile);
  this.formValue.controls['address'].setValue(data.address);
  this.formValue.controls['services'].setValue(data.Price);

  }
updateResto(){

  this.restaurentModelObj.name = this.formValue.value.name;
  this.restaurentModelObj.email = this.formValue.value.email;
  this.restaurentModelObj.mobile = this.formValue.value.mobile;
  this.restaurentModelObj.address = this.formValue.value.address;
  this.restaurentModelObj.services = this.formValue.value.services;

  this.api.updateRestaurant(this.restaurentModelObj,this.restaurentModelObj.id).subscribe(res=>{
    alert("Restaurant Records Updated");
    let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset()
      this.getAllData();

  })
}
}
  


