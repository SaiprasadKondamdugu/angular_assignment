import { Component, OnInit } from '@angular/core';
import { StudentDataService } from 'src/app/service/student-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  search : string = ""; //input from search input
  studentsData : any; //obj from StudentDataService
  students : any; // derived data from StudentDataService
  dataDetails : any; // arrays of objects data ***final
  searchedResults : any; // search data

  constructor(private _studentObj : StudentDataService) {
    this.studentsData = _studentObj;
    this.students = []
  }

  getData(){
    this.students = this.studentsData.getStudentData();
    return this.students;
  }
  
  ngOnInit(): void {
    
    // console.log(this.dataDetails);
  }

  searchData(){
    this.dataDetails = this.getData();
    console.log(this.dataDetails)
    this.searchedResults = this.dataDetails.filter((e : any) => e.name === this.search);
    console.log(this.searchedResults)
  }

}
