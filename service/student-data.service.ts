import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor() { }

  getStudentData(){
    return [
      {name : 'SaiPrasad', studentID : 193150431, branch : 'ECE', collegeName : 'SNIST'},
      {name : 'Mahi', studentID : 193150467, branch : 'ECE', collegeName : 'SNIST'},
      {name : 'Sai', studentID : 193150498, branch : 'EEE', collegeName : 'SNIST'},
      {name : 'Ajay', studentID : 193150324, branch : 'MEC', collegeName : 'SNIST'},
      {name : 'Praval', studentID : 193150356, branch : 'MEC', collegeName : 'SNIST'},
      {name : 'Sharan', studentID : 193150245, branch : 'ECE', collegeName : 'SNIST'},
      {name : 'Vilas', studentID : 1931503234, branch : 'EEE', collegeName : 'SNIST'},
    ]
  }
  getAdminCred(){
    return{userName : 'admin@gmail.com',password:'admin@123'}
  }
  getStudentCred(){
    return{userName:'student@gmail.com',password:'student@123'}
  }
}
