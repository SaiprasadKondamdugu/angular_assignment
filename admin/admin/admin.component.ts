import { Component, OnInit } from '@angular/core';
import { StudentDataService } from 'src/app/service/student-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  studentsData : any;
  students : any;
  viewHideButton : any;
  button : boolean = true

  constructor(private _studentObj : StudentDataService) {
    this.studentsData = _studentObj;
    this.students = []
    this.viewHideButton = 'View Student Details'
   }
   getStudentsData(){
    this.students = this.studentsData.getStudentData();
    if(this.viewHideButton === 'View Student Details'){
      this.viewHideButton = "Hide Student Detals";
    } else{
      this.viewHideButton = "View Student Detals";
    }
   }
  ngOnInit(): void {
  }

}
