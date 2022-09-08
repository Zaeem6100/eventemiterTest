import { Injectable } from '@angular/core';
import {StudentModel} from "./StudentModel";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  public  students: StudentModel | null | undefined  ;

  constructor() {
    this.students = null;
  }

  getStudents(): StudentModel | null | undefined {
    console.log(this.students?.rollno," Service getStudents has been triggered")
    return this.students
  }
  setStudents(student: StudentModel) {
    console.log(student.rollno," Service setStudents has been triggered")
    this.students = student;
  }
  setNull(){
    console.log(this.students?.rollno," Service setNull has been triggered")
    this.students = null;
  }
}
